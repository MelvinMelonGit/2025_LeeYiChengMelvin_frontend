# Build the React app using Node
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies (use cache efficiently)
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app (generates static files in dist/)
RUN npm run build

# Serve the built app using nginx
FROM nginx:stable-alpine

# Copy the built files from the previous stage to nginx's public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]