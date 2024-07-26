# Use an official Node runtime as a parent image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build React app
RUN npm run build

# Use a lighter image for serving your app
FROM nginx:alpine

# Copy built artifacts from the 'build' stage
COPY --from=build /app/build /usr/share/nginx/html

#COPY /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bkp
COPY default.conf /etc/nginx/conf.d/

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
