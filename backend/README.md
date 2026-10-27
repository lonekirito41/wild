# Wildlife Tracker

The site runs locally with an embedded, file-backed H2 SQL database by default. It saves data in `backend/data/wildlife_tracker_local` and needs no PostgreSQL setup for local use. PostgreSQL remains available for deployment with the `postgres` Spring profile.

## Start the app in Codex

Start the Java app from the `backend` folder:

```powershell
& "C:\ProgramData\chocolatey\lib\maven\apache-maven-3.10.0\bin\mvn.cmd" spring-boot:run
```

Open `http://localhost:8080`. The Java app serves the website and API from the same address, so account sessions work across page navigation. Register or log in through the account menu. No database user creation or command-line login is needed. Keep the app running while using it; stop it with Ctrl+C.

The first API start creates the SQL tables and seeds the animal/location catalogs. Your observations and accounts persist between local runs.

## Free cloud deployment (Render + Neon)

The repository includes a Render Blueprint and Dockerfile for a free Java web service. The free service sleeps after 15 minutes without traffic and can take about a minute to wake on the next visit. The app is therefore available online, but it is not continuously awake. Render's free service has temporary local storage, so PostgreSQL data belongs in a hosted database.

To deploy without a paid plan:

1. Create a free PostgreSQL project in [Neon](https://neon.tech/). Copy its JDBC connection string, database username, and password from the connection details. Use the pooled connection string if Neon offers it.
2. In [Render](https://render.com/), create a Blueprint from this repository and choose the `main` branch. Confirm the service plan is Free.
3. When Render asks for environment values, enter the Neon JDBC connection string for `DB_URL`, and the Neon username and password for `DB_USERNAME` and `DB_PASSWORD`. Keep these secrets in the dashboard; do not add them to Git.
4. Wait for the first deployment to finish, then open the Render service's `onrender.com` address and register an account.

New pushes to `main` redeploy automatically. The database starts empty; local H2 accounts and observations are not copied automatically. Neon free tier usage/storage limits apply. This setup is for a hobby app and may sleep or become temporarily unavailable if free-tier limits are reached.

## PostgreSQL deployment profile

Set `SPRING_PROFILES_ACTIVE=postgres`, `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` in the deployment environment. For Neon, `DB_URL` should be its JDBC form (`jdbc:postgresql://...`) with SSL enabled (`sslmode=require`). The PostgreSQL schema migration is in `src/main/resources/db/migration/postgresql`. Set `COOKIE_SECURE=true` behind HTTPS and configure `FRONTEND_ORIGINS` to the frontend's exact origin.

## API routes

- `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`, `POST /api/auth/logout`
- `GET /api/animals`, `GET /api/locations`
- `GET /api/observations` with search/date/animal/location/season filters
- `POST /api/observations`, `GET /api/observations/{id}`, `PUT /api/observations/{id}`, `DELETE /api/observations/{id}`
- `GET /api/dashboard/summary`, `GET /api/insights`, `GET /api/seasons/{season}/summary`

Passwords are BCrypt-hashed. Observation rows are private to their owner. An observation record is one event; its `count` field separately stores the number of animals seen.

Run `mvn test` from this folder for the season-boundary unit tests.
