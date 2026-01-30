# Project Architecture Plan

## Overview

This project is a full-stack Grocery Store application.

- **Frontend**: React with Ant Design for a premium UI/UX.
- **Backend**: Python with Flask for a lightweight and scalable REST API.
- **Database**: Redis for high-performance data storage.

## Folder Structure

```text
/
├── backend/                # Flask Backend
│   ├── app.py              # Application entry point
│   ├── config.py           # Configuration & Env variables
│   ├── models/             # Data models (Redis interaction)
│   ├── controllers/        # Business logic for requests
│   ├── routes/             # API route definitions
│   └── requirements.txt    # Python dependencies
├── src/                    # React Frontend
│   ├── pages/
│   │   ├── Admin/          # Admin Dashboard & Management
│   │   └── ...             # Public pages
│   ├── services/           # API Service Layer (decoupled)
│   ├── components/         # Reusable UI components
│   └── data/               # Static data / Mock data
└── ...
```

## Backend Architecture (Flask + Redis)

1. **Routing**: Uses Flask Blueprints to modularize routes (e.g., `product_routes.py`).
2. **Controllers**: Separation of concerns. Controllers handle the logic, keeping routes clean.
3. **Models**: `RedisClient` wrapper provides an abstraction over Redis commands, making it easier to switch DBs later if needed.
4. **Environment**: Managed via `.env` for flexibility across environments.

## Frontend Architecture (React + Ant Design)

1. **Admin CRUD**: A dedicated `ProductManagement` page using Ant Design's `Table`, `Modal`, and `Form` for a seamless admin experience.
2. **State Management**: Uses React state for local data management.
3. **Service Layer**: `services/api.js` acts as a bridge. It is currently decoupled as requested, but prepared for easy integration.
4. **Layouts**: Standardized layouts for public and admin views.

## Clean Code Principles

- **Separation of Concerns**: UI, Business Logic, and Data Access are clearly separated.
- **Modularity**: Small, focused files (Blueprints, Controllers, Services).
- **Type Safety/Validation**: Ant Design Forms handle validation on the frontend.
- **Configuration**: No hardcoded values; all configs in `.env` or `config.py`.
