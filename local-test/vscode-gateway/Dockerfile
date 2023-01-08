FROM node:18-slim

# Create a non-root user to run the application
RUN groupadd --gid 3000 app && \
    useradd --uid 3000 --gid 3000 --shell /bin/bash --create-home app

# Set the working directory to the home directory of the non-root user
WORKDIR /home/app

# Copy the application code to the working directory
COPY . .

# Set the user and group for the application code
RUN chown -R app:app .

# Run the application as the non-root user
USER app

# Expose the default port for the application
EXPOSE 3000

# Run the application when the container starts
CMD ["yarn", "run", "start"]
