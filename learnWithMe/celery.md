# Celery

Basically helps you run a task in a distributed way. NOT an orchestrator though. It is an open-source Python library that acts as a distributed task queue, allowing applications to run time-consuming tasks (like sending emails, processing images, or batch jobs) asynchronously in the background, separate from the main web request-response cycle, making web apps faster and more responsive. It uses a message broker (like Redis or RabbitMQ) to send tasks to workers, which execute them, and can handle scheduling (with Celery Beat) and retries, making it great for large-scale, scalable applications. 

<embed src="images/celery.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="600px" />