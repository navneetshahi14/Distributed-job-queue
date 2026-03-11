# Distributed Job Queue System

A scalable **Distributed Job Queue System** built using **Node.js, BullMQ, Redis, and PostgreSQL**.
This system allows applications to process heavy or long-running tasks asynchronously using background workers.

The goal of this project is to simulate how **production systems handle background tasks** such as email notifications, report generation, image processing, and other asynchronous workloads.

---

# Architecture Overview

```
Client (Web / API Consumer)
 │
 ▼
HTTP Server (Node.js)
 │
 ├── Express REST API
 │
 └── Socket.IO (real-time events)
 │
 ▼
Authentication + API Key Middleware
 │
 ▼
PostgreSQL
(Job Lifecycle + Users + Workers)
 │
 ▼
Redis Queue (BullMQ)
 │
 ├── Rate Limiting
 ├── Job Deduplication
 ├── Delayed Jobs
 │
 ▼
Workers
 │
 ├── Retry mechanism
 ├── Priority execution
 ├── Job Handlers
 │
 ▼
Dead Letter Queue
 │
 ▼
WebSocket Events
 │
 ▼
Monitoring Dashboard (Bull Board)
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

Getting background jobs through an HTTP API.

```
GET /job/:id
```

Example response:

```json
{
  "id": "ca2a3e7a-3f7b-4650-a75f-d3c1adc8b8e7",
  "type": "send_email",
  "status": "completed",
  "payload": {
    "to": "test@gmail.com"
  },
  "result": "completed",
  "attempts": 0,
  "createdAt": "2026-03-11T09:30:27.177Z",
  "updatedAt": "2026-03-11T09:30:30.394Z"
}
```

---

### Worker Based Processing

Jobs are processed by background workers that consume tasks from the Redis queue.

---

### Job Handler Architecture (SOLID)

Each job type has its own handler.

Example handlers:

- EmailHandler
- ReportHandler

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

- Node.js
- Express
- TypeScript

Queue System

- BullMQ
- Redis

Database

- PostgreSQL
- Prisma ORM

Architecture

- SOLID Principles
- Repository Pattern
- Factory Pattern

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
│   ├── jobController.ts
│   └── metricsController.ts
│
├── dashboard
│   └── queueDashboard.ts
│
├── handlers
│   ├── emailHandler.ts
│   ├── reportHandler.ts
│   └── jobHandlerFactory.ts
│
├── queues
│   ├── deadLetterQueue.ts
│   └── jobQueue.ts
│
├── repositories
│   └── jobRepository.ts
│
├── service
│   └── workerHealth.ts
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

- Distributed workers
- Retry mechanism
- Delayed jobs
- Priority jobs
- Dead letter queue
- Queue metrics
- Worker health monitoring
- API key authentication
- Job deduplication
- Real-time updates
- Monitoring dashboard

---

# Purpose of this Project

This project demonstrates how **modern backend systems handle asynchronous workloads at scale**.

It focuses on:

- Distributed processing
- Background job management
- Scalable backend architecture
- Clean architecture using SOLID principles
