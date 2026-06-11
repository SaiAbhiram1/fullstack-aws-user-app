
# MiniProject — Full Stack (React + Spring Boot)

This repository contains a small full-stack application with:
- React + Vite frontend
- Spring Boot backend
- Simple REST API for user management

It is designed for local development, builds, and demo deployment notes.

## Tech Stack

- Frontend: React, Vite, JavaScript
- Backend: Spring Boot, Java, Maven
- Database: H2 by default / PostgreSQL optional

## Quick Start

### Prerequisites

- Java 17+ and Maven
- Node.js 18+ and npm
- Optional: PostgreSQL for a local database

### Run backend locally

```powershell
cd backend
./mvnw spring-boot:run    # macOS/Linux
./mvnw.cmd spring-boot:run  # Windows
```

The backend starts on `http://localhost:8080`.

### Run frontend locally

```bash
cd frontend
npm install
npm run dev
```

Open the frontend URL shown by Vite (usually `http://localhost:5173`).

## Build

### Build backend jar

```bash
cd backend
./mvnw -DskipTests package
```

### Build frontend production files

```bash
cd frontend
npm run build
```

## API

Base path: `/api`

Endpoints:

- `GET /api/users` — return all users
- `POST /api/users` — create a new user

Example POST body:

```json
{
  "name": "Sai",
  "email": "sai@example.com"
}
```

cURL example:

```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Sai","email":"sai@example.com"}'
```

## Project Structure

- `backend/` — Spring Boot application
  - `src/main/java` — Java source code
  - `src/main/resources` — configuration and application properties
- `frontend/` — Vite + React frontend
  - `src/` — React components and app files

## Deployment Notes

A common demo deployment flow is:

- Frontend: build static assets and host on S3 or another static file host
- Backend: build the JAR and deploy to EC2, or containerize and use ECS
- Database: use RDS PostgreSQL or another managed database

Set these production properties in `backend/src/main/resources/application.properties`:

- `spring.datasource.url`
- `spring.datasource.username`
- `spring.datasource.password`

## Notes & Next Steps

- For local development, the project can use an in-memory database or PostgreSQL by updating `application.properties`.
- Add more API documentation if you expand endpoints or request/response models.

## Author

Sai Abhi Ram

