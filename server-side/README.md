### Using Docker to run the database locally
To use a local mongoDB instance in Docker, make sure that your `.env` file contains `dburl=mongodb://localhost:27017`.

If you don't have a `.env` file you can simply run `cp .env.example .env`
to create a `.env` file with default settings.

Finally, to start the container, run `docker run --name mongodb -p 27017:27017 mongo` in a terminal.