FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /workspace
COPY backend/pom.xml ./backend/pom.xml
COPY backend/src ./backend/src
COPY *.html ./
COPY css ./css
COPY js ./js
WORKDIR /workspace/backend
RUN mvn -B -DskipTests package

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /workspace/backend/target/wildlife-tracker-api-1.0.0.jar /app/app.jar
EXPOSE 10000
ENTRYPOINT ["sh", "-c", "if [ -n \"${DB_HOST:-}\" ]; then export DB_URL=\"jdbc:postgresql://${DB_HOST}:${DB_PORT:-5432}/${DB_NAME}\"; fi; exec java -XX:MaxRAMPercentage=75 -jar /app/app.jar"]
