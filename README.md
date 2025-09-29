# Node.js Backend

![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)
![Express](https://img.shields.io/badge/express-4.x-blue)
![License](https://img.shields.io/badge/license-MIT-yellow.svg)
[![CI](https://github.com/your-username/your-nodejs-backend/actions/workflows/CI.yml/badge.svg)](https://github.com/your-username/your-nodejs-backend/actions)
[![Render](https://img.shields.io/badge/deploy-Render-blueviolet)](https://render.com)

---

## Table of Contents

- [Project Structure](-#-project-structure)
- [Local Development](-#-local-development)
- [Using Nx](-#-using-nx)
- [Render Deployment](-#-render-deployment)
- [Render Deployment Workflow](-#-render-deployment-workflow)
- [Architecture](-#-architecture)

---

## Project Structure

- `src/server.js` → Application entrypoint
- `src/routes/` → Route definitions
- `src/controllers/` → Request handlers
- `src/services/` → Business logic
- `test/` → Jest/Mocha tests
- `scripts/` → Helper scripts (e.g., DB migrations, utilities)
- `docs/` → API spec, Postman collections

---

## Local Development

### 1. Setup Node.js environment

```bash
npm install
```

### 2. Environment variables

Local development uses **.env.development** file:

```diff
NODE_ENV=development
APP_ENV=development
LOG_LEVEL=debug
```

### 3. Run the app locally

```bash
npm run start
```

App will be available at → <http://localhost:3000>
> When trying to access webservice from local server, we prefer to use Eng Environment of the webservice.

---

## Using Nx

This project integrates with **Nx** for task orchestration and caching.

### Available Nx commands

- **Lint**

  ```bash
  npx nx lint nodejs-backend
  ```

- **Test**

  ```bash
  npx nx test nodejs-backend
  ```

- **Build**

  ```bash
  npx nx build nodejs-backend
  ```

- **Serve**

  ```bash
  npx nx serve nodejs-backend
  ```

### Why Nx?

- Consistent task running across environments
- Smart caching (local + Nx Cloud) → faster CI/CD
- Scales well for monorepos with multiple Node.js apps

---

## Render Deployment

This application is deployed on Render with the following environments:

| Environment | URL                                        | APP_ENV    |
| ----------- | ------------------------------------------ | ---------- |
| Production  | <https://nodejs-backend-prod.onrender.com> | production |
| Engineering | <https://nodejs-backend-eng.onrender.com>  | eng        |

> Each service runs the same codebase with different `APP_ENV` values.

---

## Render Deployment Workflow

This project is deployed to **Render** using:

- **render.yaml** → Defines multiple Render services (prod, eng) with their own `APP_ENV`
- **Environment Variables** → Secrets (`DATABASE_URL`, `JWT_SECRET`, etc.) must be set in Render’s dashboard or in `render.yaml` (`sync: false`)

### Steps to deploy

1. Commit and push changes to GitHub branch.
2. Render detects the `render.yaml` blueprint from master branch and provisions services.
3. Each service runs with its own environment (`APP_ENV=production`, `APP_ENV=eng`)
4. Access environments via their respective URLs.

---

## Architecture

![Architecture Diagram](./architecture.png)
