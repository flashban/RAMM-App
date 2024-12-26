FROM node:14.17.5

WORKDIR /app

# Copy both package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Set the environment variable for the port
ENV PORT=3003

# Expose port 3003
EXPOSE 3003

# Command to start the application
CMD ["npm", "start"]
