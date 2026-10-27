# Wildlife Tracker

The site runs locally with an embedded, file-backed H2 SQL database by default. It saves data in `backend/data/wildlife_tracker_local` and needs no PostgreSQL setup for local use. PostgreSQL remains available for deployment with the `postgres` Spring profile.

## Start the app in Codex

Start the Java app from the `backend` folder:

```powershell
& "C:\ProgramData\chocolatey\lib\maven\apache-maven-3.10.0\bin\mvn.cmd" spring-boot:run
```

Open `http://localhost:8080`. The Java app serves the website and API from the same address, so account sessions work across page navigation. Register or log in through the account menu. No database user creation or command-line login is needed. Keep the app running while using it; stop it with Ctrl+C.

The first API start creates the SQL tables and seeds the animal/location catalogs. Your observations and accounts persist between local runs.

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
