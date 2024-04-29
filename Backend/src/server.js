/* This will prepare the server by taking in the config files. */
/* These will be exported to index.js */

require('./config/db')

const app = require("express")()
const cors = require("cors")
const bodyParser = require("express").json
const routes = require("./routes")

// cors
app.use(cors())

/* Con */
app.use(bodyParser())

/* Resgister all the routes */
app.use(routes)

module.exports = app