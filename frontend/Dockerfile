FROM node:18 AS builder

WORKDIR /frontend

COPY package*.json .
# Chạy 'npm ci' (clean install) cho production ổn định hơn
RUN npm ci
COPY . .
RUN npm run build

# --- Giai đoạn 2: Image cuối cùng (siêu nhỏ) ---
FROM node:18-alpine
WORKDIR /frontend
# Cài 'serve' để chạy các file tĩnh
RUN npm install -g serve
# Chỉ copy thư mục 'build' từ giai đoạn 'builder'
COPY --from=builder /frontend/build ./build
EXPOSE 3000
# Lệnh chạy server production
CMD ["serve", "-s", "build", "-l", "3000"]
