# Wildlife Tracker

The site runs locally with an embedded, file-backed H2 SQL database by default. It saves data in `backend/data/wildlife_tracker_local` and needs no PostgreSQL setup for local use. PostgreSQL remains available for deployment with the `postgres` Spring profile.

## Start the app in Codex

Start the Java app from the `backend` folder:

```powershell
& "C:\ProgramData\chocolatey\lib\maven\apache-maven-3.10.0\bin\mvn.cmd" spring-boot:run
```

Open `http://localhost:8080`. The Java app serves the website and API from the same address, so account sessions work across page navigation. Register or log in through the account menu. No database user creation or command-line login is needed. Keep the app running while using it; stop it with Ctrl+C.

The first API start creates the SQL tables and seeds the animal/location catalogs. Your observations and accounts persist between local runs.

## Deploy continuously on Render

The repository includes a Render Blueprint, Dockerfile, and managed PostgreSQL configuration. In Render, create a Blueprint from this repository and select `main`; applying it creates a paid, always-on Java service and persistent PostgreSQL database. New pushes to `main` then redeploy automatically. The current small always-on setup is roughly $31/month before usage changes; check Render's current prices before applying the Blueprint. Free Render services sleep after 15 minutes idle and free databases expire after 30 days, so they do not meet the 24/7 requirement.

The Blueprint uses the Singapore region. It sets secure session cookies for HTTPS and runs the PostgreSQL schema migration on startup. Do not commit production database credentials; Render supplies them to the service. The cloud database starts empty; local H2 accounts and observations are not copied automatically.

## PostgreSQL deployment profile

Set `SPRING_PROFILES_ACTIVE=postgres`, `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` in the deployment environment. The PostgreSQL schema migration is in `src/main/resources/db/migration/postgresql`. Set `COOKIE_SECURE=true` behind HTTPS and configure `FRONTEND_ORIGINS` to the frontend's exact origin.

## API routes

- `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`, `POST /api/auth/logout`
- `GET /api/animals`, `GET /api/locations`
- `GET /api/observations` with search/date/animal/location/season filters
- `POST /api/observations`, `GET /api/observations/{id}`, `PUT /api/observations/{id}`, `DELETE /api/observations/{id}`
- `GET /api/dashboard/summary`, `GET /api/insights`, `GET /api/seasons/{season}/summary`

Passwords are BCrypt-hashed. Observation rows are private to their owner. An observation record is one event; its `count` field separately stores the number of animals seen.

Run `mvn test` from this folder for the season-boundary unit tests.
