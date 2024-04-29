/* This will bring in the prepared server */
const server = require("./server")

/* Import the environment variables from .env file */
const dotenv = require("dotenv");

dotenv.config();

/* server port */
const port = process.env.PORT || 5000

const startServer = () => {
    server.listen(port , () => {
        console.log(`Server running on port ${port}`)
    })
}

startServer()