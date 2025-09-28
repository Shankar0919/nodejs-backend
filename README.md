## Table of Contents

- [Deployment URLs](#deployment-urls)

# NodeJS Backend (NestJS + Fastify + Nx)

This project is a **NestJS + Fastify** backend application, managed with **Nx**, with Swagger documentation, unit test coverage enforcement, and GitHub Actions CI.

---

## 📑 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [API Collections](#-api-collections)
- [CI/CD](#-cicd)
- [Dependencies](#-dependencies)
- [Notes](#-notes)
- [Next Steps](#-next-steps)

---

## 🚀 Quick Start

Clone the repository and install dependencies:

```bash
git clone https://github.com/Shankar0919/nodejs-backend.git
cd nodejs-backend
npm install
```

Run the application in local mode:

```bash
npx nx serve nodejs-backend --configuration=local
```

The app will start at:  
👉 `http://localhost:3000`  
Swagger UI available at:  
👉 `http://localhost:3000/api-docs`

---

## 🚀 Features

- **NestJS + Fastify** for high-performance NodeJS backend
- **Swagger (`@nestjs/swagger`)** auto-generated API spec (`collections/api-spec.yaml`)
- **Nx** workspace for build, lint, serve, and test
- **Jest** unit testing with **80%+ coverage thresholds**
- **GitHub Actions CI** runs build, lint, test (with coverage)
- **No optional packages required** (`@fastify/static` removed)
- Modular API structure:
  - `src/api/controller` → Controllers with endpoints
  - `src/api/service` → Business logic/services
  - `src/api-generator.ts` → Generates Swagger spec (YAML)

---

## 🗂 Project Structure

```tree
nodejs-backend/
├── src/
│   ├── api/
│   │   ├── controller/       # Controllers (e.g., ApiController)
│   │   ├── service/          # Services (e.g., ApiService)
│   ├── app.module.ts         # Root NestJS module
│   ├── main.ts               # App bootstrap (Fastify + Swagger UI)
│   ├── api-generator.ts      # Swagger YAML generator
│   └── api-generator.spec.ts # Jest test for generator
├── collections/              # Generated Swagger spec & API collections
│   ├── api-spec.yaml         # Auto-generated OpenAPI spec
│   ├── postman.json          # Postman collection
│   └── runo.json             # Runo collection
├── project.json              # Nx project config
├── nx.json                   # Nx workspace config
├── jest.config.ts            # Jest config with coverage thresholds
├── .eslintrc.json            # ESLint config
├── .eslintignore             # ESLint ignore patterns
├── .gitignore                # Git ignore patterns
└── .github/
    └── workflows/
        └── ci.yml            # GitHub Actions CI
```

---

## ⚡ Scripts

### Local development

```bash
npx nx serve nodejs-backend
```

Runs the app at `http://localhost:3000`.

Swagger UI → `http://localhost:3000/api-docs`

---

### Build

```bash
npx nx build nodejs-backend
```

Outputs to `dist/`.

---

### Lint

```bash
npx nx lint nodejs-backend
```

---

### Unit Tests with Coverage

```bash
npx nx test nodejs-backend --code-coverage
```

- Coverage reports in `coverage/`
- **Fails if global coverage < 80%**

---

### Generate Swagger Spec (YAML)

```bash
npx ts-node src/api-generator.ts
```

Writes `collections/api-spec.yaml`.

---

## 📬 API Collections

For testing APIs outside Swagger, you can use:

- **Postman collection**: `collections/postman.json`
- **Runo collection**: `collections/runo.json`

Steps:

1. Open Postman or Bruno client
2. Import the collection file from the `collections/` directory
3. Run requests like:
   - `GET http://localhost:3000/api`
   - `GET http://localhost:3000/api/{id}`
   - `GET http://localhost:3000/api/user`

---

## ✅ CI/CD

GitHub Actions (`.github/workflows/ci.yml`) runs on all branches:

- Lint
- Build (local config)
- Test (with coverage)
- Uploads coverage reports as artifacts

---

## 📦 Dependencies

Core:

- `@nestjs/core`
- `@nestjs/common`
- `@nestjs/platform-fastify`
- `@nestjs/swagger`
- `fastify`
- `rxjs`
- `reflect-metadata`

Dev:

- `nx`, `@nx/js`, `@nx/jest`, `@nx/eslint`
- `jest`, `ts-jest`, `@types/jest`
- `eslint`, `@typescript-eslint/*`, `eslint-config-prettier`
- `typescript`, `ts-node`

---

## 🛠 Notes

- Default Nx configuration is `local`.

---

## 🔮 Next Steps

- Add more controllers/services in `src/api/`


## Deployment URLs

| Environment | URL |
|-------------|-----|
| Eng         | https://nodejs-backend-eng.onrender.com |
| Test        | https://nodejs-backend-test.onrender.com |
| Prod        | https://nodejs-backend-prod.onrender.com |
