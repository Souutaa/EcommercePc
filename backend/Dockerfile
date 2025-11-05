# ==========================================
# Stage 1: Build ứng dụng
# ==========================================
FROM maven:3.9.9-eclipse-temurin-17 AS builder

WORKDIR /app

# Cài dos2unix trước
RUN apt-get update && apt-get install -y dos2unix

# Copy wrapper trước
COPY mvnw ./
COPY .mvn .mvn
COPY pom.xml ./

# Convert newline và cấp quyền chạy
RUN dos2unix mvnw && chmod +x mvnw

COPY src ./src

RUN mvn clean package -DskipTests

# ==========================================
# Stage 2: Runtime
# ==========================================
FROM eclipse-temurin:17-jre-focal
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

ARG PORT=8080
ENV PORT=$PORT
EXPOSE $PORT

CMD ["sh", "-c", "java -Dserver.port=$PORT -jar app.jar"]
