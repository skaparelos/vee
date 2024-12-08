# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

RUN npm run generate:typings

# Build the NestJS application
RUN npm run build

RUN npx prisma db push
RUN npx prisma migrate dev --name init

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]