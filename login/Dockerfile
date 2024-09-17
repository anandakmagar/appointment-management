# Use an official NGINX image as the base image
FROM nginx:alpine

# Copy the frontend files (HTML, CSS, JS) into the NGINX default serving directory
COPY ./ /usr/share/nginx/html/

# Expose port 80 to make NGINX accessible
EXPOSE 80

# Start the NGINX web server
CMD ["nginx", "-g", "daemon off;"]
