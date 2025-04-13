# Build Stage
FROM node:lts as builder

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files and build the Next.js app
COPY . .
RUN npm run build

# Production Stage
FROM node:20.17-alpine

WORKDIR /app

# Set environment variables and create .env file in one step to reduce layers
# RUN echo "GOOGLE_ANALYTICS_ID=G-JJJSYR3KW" >> .env && \
# echo "NEXT_PUBLIC_APP_URL=https://test.gib.work" >> .env

# Copy only the necessary files for production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env ./

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]