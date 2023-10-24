# Use the official Node.js image as a parent image
FROM node:18.16.0

# Install Zsh and vim
RUN apt-get update && apt-get install -y zsh vim

# Set the working directory to /app
WORKDIR /app

# Copy your project files
COPY . /app

# Set Zsh as the default shell
SHELL ["/bin/zsh", "-c"]

# Set Vim as the default editor
ENV VISUAL=vim
ENV EDITOR=vim

# Install your project dependencies using npm
RUN npm install

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define the command to run your application
CMD ["npm", "start"]
