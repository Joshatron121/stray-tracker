const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

const {DATABASE_URL, PORT} = require('./config')

app.use(morgan('common'))
app.use(express.static('public'))
function runServer() {
	app.listen(PORT)
	console.log(`The server is now listening on ${PORT}`)
}

runServer()
