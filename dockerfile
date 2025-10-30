# Use official Node.js image as the base
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the Node.js app
CMD ["npm", "start"]
