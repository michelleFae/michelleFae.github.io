# Celery

Basically helps you run a task in a distributed way. NOT an orchestrator though. It is an open-source Python library that acts as a distributed task queue, allowing applications to run time-consuming tasks (like sending emails, processing images, or batch jobs) asynchronously in the background, separate from the main web request-response cycle, making web apps faster and more responsive. It uses a message broker (like Redis or RabbitMQ) to send tasks to workers, which execute them, and can handle scheduling (with Celery Beat) and retries, making it great for large-scale, scalable applications. 

Celery Workflows can be in:
- Chains: Sequential Workflows with linear dependency
```
from celery import chain

result = chain(task1.s(), task2.s(), task3.s())()
```

- Groups: Parallel workflows

group → fire-and-forget parallelism

```
from celery import group

result = group(task1.s(), task2.s(), task3.s())()
```

- Chords: Dynamic Task Groups

For more complex asynchronous operations where tasks need to run in parallel but complete only when all are finished, Celery’s chord comes into play. It dynamically groups tasks together and triggers a callback task when all tasks in the group are done. A chord is just like a group but with a callback. A chord consists of a header group and a body, where the body is a task that should execute after all of the tasks in the header are complete.

```
from celery import chord

header = [task.s(i) for i in range(10)]
callback = process_results.s()
result = chord(header)(callback)
```

“Can’t I just chain a group to another task?”

You can write:

(group(task_a.s(), task_b.s()) | callback.s()).apply_async()


But this is not equivalent to a chord.

Why?

A chain(group, task) only waits for the group’s result object, not for every task’s success in a robust way

Error handling is weaker:

If one task in the group fails, behavior can be inconsistent

Retries and partial failures are not coordinated

Result aggregation is unreliable compared to a chord

Celery’s own docs say this explicitly:

If you need a callback after a group, use a chord, not a chain.

4. What a chord does that a chained group does not

Internally, a chord:

Tracks every task completion

Uses a backend-level counter or unlock task

Ensures the callback fires exactly once

Handles retries and failures correctly

Guarantees the callback gets all results in order

A chained group:

Has no true “join” primitive

Can race, especially under retries or failures

Can silently misbehave with some result backends

5. Rule of thumb
Use case	Use
Parallel execution only	group
Parallel → aggregate → continue	chord
Sequential tasks →	chain

use a combo of all of these in a complex dag.

<embed src="images/celery.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="600px" />

## @app.task and @shared_task

@app.task → registers task on that specific app

@shared_task → registers task on a global registry, then attaches it when an app is finalized

@app.task

App-bound task

from myapp.celery import app

@app.task
def send_email(user_id):
    ...

Characteristics

Bound to a specific Celery app instance

Requires importing the app object

Task is registered only on that app

Clear and explicit

Best when:

You have one Celery app

You want strict control over configuration

Tasks live close to app bootstrap code

Pros

Explicit ownership

Easier to reason about in small/medium codebases

Cons

Creates tight coupling

Can cause circular imports in large Django / monorepo setups

@shared_task

App-agnostic (recommended for libraries & Django)

from celery import shared_task

@shared_task
def send_email(user_id):
    ...

Characteristics

Not bound to any app at definition time

Automatically registers with whatever Celery app is active

Designed to avoid import-order problems

Preferred in Django projects and reusable modules

Pros

Loosely coupled

Avoids circular imports

Works cleanly across multiple apps

Cons

Slightly less explicit

Requires a correctly configured default Celery app

### Key differences at a glance

| Aspect | `@app.task` | `@shared_task` |
|------|-------------|----------------|
| App binding | Immediate, explicit | Deferred, implicit |
| Coupling | Tight | Loose |
| Import safety | Risk of circular imports | Safer |
| Multiple apps | Not ideal | Works well |
| Django best practice | ❌ | ✅ |

