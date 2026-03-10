# Distributed Job Queue System

A scalable **Distributed Job Queue System** built using **Node.js, BullMQ, Redis, and PostgreSQL**.
This system allows applications to process heavy or long-running tasks asynchronously using background workers.

The goal of this project is to simulate how **production systems handle background tasks** such as email notifications, report generation, image processing, and other asynchronous workloads.

---

# Architecture Overview

```
Client
 │
 ▼
Express API Server
 │
 ▼
PostgreSQL (Job Lifecycle Tracking)
 │
 ▼
Redis Queue (BullMQ)
 │
 ▼
Worker System
 │
 ▼
Job Handlers
```

---

# Current Features

### Job Creation API

Create background jobs through an HTTP API.

```
POST /jobs
```

Example request:

```json
{
  "type": "send_email",
  "payload": {
    "to": "test@gmail.com"
  }
}
```

---

### Worker Based Processing

Jobs are processed by background workers that consume tasks from the Redis queue.

---

### Job Handler Architecture (SOLID)

Each job type has its own handler.

Example handlers:

* EmailHandler
* ReportHandler

A **JobHandlerFactory** dynamically resolves the correct handler.

---

### Job Lifecycle Tracking

Jobs are stored in PostgreSQL with status tracking.

Lifecycle states:

```
pending
processing
completed
failed
```

---

# Tech Stack

Backend

* Node.js
* Express
* TypeScript

Queue System

* BullMQ
* Redis

Database

* PostgreSQL
* Prisma ORM

Architecture

* SOLID Principles
* Repository Pattern
* Factory Pattern

---

# Project Structure

```
src
│
├── config
│   ├── prisma.ts
│   └── redis.ts
│
├── controllers
│   └── jobController.ts
│
├── handlers
│   ├── emailHandler.ts
│   ├── reportHandler.ts
│   └── jobHandlerFactory.ts
│
├── queues
│   └── jobQueue.ts
│
├── repositories
│   └── jobRepository.ts
│
├── workers
│   └── jobWorker.ts
│
└── server.ts
```

---

# Running the Project

### 1 Install dependencies

```
npm install
```

### 2 Start Redis

```
redis-server
```

### 3 Run database migrations

```
npx prisma migrate dev
```

### 4 Start the API server

```
npm run dev
```

### 5 Start the worker

```
npx ts-node src/workers/jobWorker.ts
```

---

# Example Workflow

1. Client sends a request to create a job.
2. Job is stored in PostgreSQL with `pending` status.
3. Job is pushed to Redis queue.
4. Worker picks the job from the queue.
5. Worker executes the job handler.
6. Job status updates to `completed` or `failed`.

---

# Roadmap

Upcoming features:

* Retry mechanism
* Delayed jobs
* Priority queues
* Dead letter queue
* Webhook callbacks
* Job dashboard
* Worker monitoring

---

# Purpose of this Project

This project demonstrates how **modern backend systems handle asynchronous workloads at scale**.

It focuses on:

* Distributed processing
* Background job management
* Scalable backend architecture
* Clean architecture using SOLID principles
