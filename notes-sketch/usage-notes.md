# install the dependencies

    npm install

# start container with the database

    docker-compose up
    ╰─ docker compose up -d     # to run in the background

# compare schema.prisma with the database and update the database
    npx prisma migrate dev 