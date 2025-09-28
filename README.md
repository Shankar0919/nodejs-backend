# NodeJS Backend

![Node.js](https://img.shields.io/badge/node-%20v20-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![License: ISC](https://img.shields.io/badge/license-ISC-blue)

A backend service built with [NestJS](https://nestjs.com/) and [Nx](https://nx.dev/), using the [Fastify](https://fastify.dev/) adapter for high performance.  
This project provides modular architecture, validation, logging, and OpenAPI documentation.

---

## 📑 Table of Contents

- [Overview](-#overview)
- [Tech Stack](-#tech-stack)
- [Getting Started](-#getting-started)
  - [Prerequisites](-#prerequisites)
  - [Installation](-#installation)
  - [Running the App](-#running-the-app)
- [Scripts](-#scripts)
- [Testing](-#testing)
- [API Documentation](-#api-documentation)
- [Deployment](-#deployment)
- [Environments](-#environments)
- [Contributing](-#contributing)
- [License](-#license)

---

## 📌 Overview

This repository contains the **NodeJS backend** built using **NestJS + Nx + Fastify**.  
It is structured to support multiple environments (Eng, Test, Prod) and includes built-in support for:

- DTO validation with `class-validator`
- Logging service
- Custom validators
- API documentation via Swagger / OpenAPI
- Deployments on [Render](https://render.com)

---

## ⚙️ Tech Stack

- **Language**: TypeScript
- **Framework**: [NestJS 11](https://docs.nestjs.com/)
- **HTTP Adapter**: [Fastify](https://fastify.dev/)
- **Tooling**: [Nx](https://nx.dev/)
- **Validation**: [class-validator](https://github.com/typestack/class-validator)
- **API Docs**: [Swagger / OpenAPI](https://swagger.io/)
- **Deployment**: [Render](https://render.com)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js v20](https://nodejs.org/)
- [npm](https://www.npmjs.com/) v9+

### Installation

Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd nodejs-backend
npm install
```

### Running the App

Start the application in **development**:

```bash
npm run start
```

Or run with specific environments:

```bash
npm run start:eng
npm run start:test
npm run start:prod
```

---

## 📜 Scripts

| Command                | Description                                      |
|-------------------------|--------------------------------------------------|
| `npm run start`         | Start in development mode                        |
| `npm run start:eng`     | Start in Eng environment                         |
| `npm run start:test`    | Start in Test environment                        |
| `npm run start:prod`    | Start in Production environment                  |
| `npm run build:eng`     | Build for Eng                                    |
| `npm run build:test`    | Build for Test                                   |
| `npm run build:prod`    | Build for Prod                                   |
| `npm run lint`          | Run ESLint checks                                |
| `npm run test`          | Run unit tests                                   |
| `npm run test:coverage` | Run tests with coverage                          |
| `npm run document:write`| Generate OpenAPI spec (`collections/api-spec.yaml`) |

---

## 🧪 Testing

Run unit tests:

```bash
npm run test
```

Run with coverage:

```bash
npm run test:coverage
```

---

## 📖 API Documentation

- OpenAPI spec is generated into:  
  `collections/api-spec.yaml` (Swagger + Bruno)  
  `collections/postman_collection.json` (Postman)

- Swagger UI is available when the app is running at:  

  ```url
  http://localhost:3000/api-docs
  ```

---

## 🌍 Deployment

This project is deployed on [Render](https://render.com) with three environments.

### Environments

| Environment | URL                                                                 |
|-------------|---------------------------------------------------------------------|
| Eng         | <https://shankar-nodejs-backend-eng.onrender.com/>                    |
| Test        | <https://shankar-nodejs-backend-test.onrender.com/>                   |
| Prod        | <https://shankar-nodejs-backend-prod.onrender.com/>                   |

---

## 🤝 Contributing

- Do not commit directly to `master`.  
- Create custom branches and raise Pull Requests.  
- Ensure build, tests and lint pass before merging.

---
