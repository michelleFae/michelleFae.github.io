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

### Celery Signatures (Quick Notes)

- **Signature**: A *deferred task call* (task + args + options), e.g. `add.s(2, 3)`
- **Partials**: Signatures act like `functools.partial` — args can be filled later
- **Mutable (`.s`)**: Upstream task results are *prepended* to args (default)
- **Immutable (`.si`)**: Ignores upstream results; args stay fixed
- **Callbacks**:
  - `link` → runs on success, receives task result
  - `link_error` → runs on failure, receives exception info
- **Rule of thumb**:
  - Depends on previous result → use `.s()`
  - Side-effect / fixed args → use `.si()`

Here you go — clean, copy-pasteable **Markdown** you can drop straight into your notes.

---

# Celery Debugging Checklist

Use this when a task hangs, stays `PENDING`, or behaves unexpectedly.

---

## 1. Always start in the Python shell (never block forever)

```python
result.status
result.ready()
result.get(timeout=10)
```

**Interpretation**

* `PENDING` + timeout → task never executed *or* result backend never updated
* `FAILURE` → task ran and raised; `get()` will surface the exception
* `SUCCESS` → task completed correctly

Also useful:

```python
result.id
```

---

## 2. Immediately check worker logs (most important step)

```bash
docker compose logs -f xyzworker
```

Look for:

* **`Received invalid task message` / `ContentDisallowed`**
  → serializer / `accept_content` mismatch (producer vs worker)

* **`Task <name> received` + traceback**
  → task code error

* **No `Received task` at all**
  → routing/queue mismatch or worker not running

* **Worker stopping / restarting**
  → container lifecycle issue (e.g. “Container will stop after 60 seconds”)

---

## 3. Verify broker and result backend configuration

In Python shell:

```python
app.conf.broker_url
app.conf.result_backend
```

Confirm these match what the worker is using.

Also sanity-check the backend:

```python
type(result.backend), result.backend
```

---

## 4. Confirm the worker is alive and consuming your queue

```bash
docker compose ps
```

Make sure the worker container is **Up**, not restarting or exited.

If sending to a specific queue (e.g. `queue="xyzworker"`), the worker must be consuming that queue.

---

## 5. Confirm the task is registered on the worker

Common failure: producer sends a task name the worker never imported.

Inside the worker container:

```bash
docker compose exec xyzworker /opt/bb/bin/python3.x -c '
from app import app
print("xyzworker.combine" in app.tasks)
print([k for k in app.tasks.keys() if "xyzworker" in k])
'
```

(Adjust `from app import app` if your module name differs.)

---

## 6. Serializer / content-type issues (very common)

If logs show `ContentDisallowed`:

* Producer and worker disagree on:

  * `task_serializer`
  * `accept_content`
  * `result_serializer`

**Best practice:** use the shared / official config:

```python
app.config_from_object("bloomberg.datalicense.dljobs2.config.celery_config")
```

**Tactical workaround (if appropriate):**

```python
app.send_task(..., serializer="json")
```

---

## 7. Watch out for container lifecycle traps

Symptoms:

* Tasks work briefly, then hang
* Worker logs show shutdown messages

Fix by:

* Disabling auto-stop / timeout env vars
* Or overriding the worker command to run continuously

Always fix lifecycle issues *before* debugging Celery logic.

---

## 8. Create a “known good” sanity test when stuck

Define a trivial task:

```python
@app.task(name="xyzworker.ping")
def ping():
    return 2
```

Send it:

```python
result = app.send_task("xyzworker.ping", queue="xyzworker")
result.get(timeout=10)
```

If this fails, the problem is infra/config — not your business logic.

---

## Quick Decision Tree

* **`PENDING` + no `Received task` log**
  → routing / queue mismatch or worker not running

* **`PENDING` + `ContentDisallowed`**
  → serializer mismatch

* **`FAILURE` + traceback**
  → task code bug

* **Worker exits or restarts**
  → container lifecycle issue

---

## Golden Rules

* Always use `result.get(timeout=…)`
* Logs > guessing
* Fix worker runtime issues before Celery config issues
* Keep producer and worker configs in sync
