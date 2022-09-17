# First Layer of known image from docker hub or your own repo
FROM node:18-alpine

# Setting up a working directory in docker image to run
WORKDIR /app

# Copying package.json in above workdir
COPY package.json ./

# Runing the command
# For building the image
RUN yarn install --development

# Copying all the source code from current to the above workdir 
COPY . ./

# Expose it to port 3000
EXPOSE 3000

# For running the container
CMD ["yarn", "run", "dev"]