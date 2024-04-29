const express = require('express')

const router = express.Router()

const signInRoute = require('../domains/authentication')

const users = require('../domains/users')

const messages = require('../domains/messages')

router.use("/auth" , signInRoute)

router.use("/users" , users)

router.use("/messages" , messages)

module.exports = router