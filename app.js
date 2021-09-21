require('dotenv').config()
// const config = require('./utils/config')
const express = require('express');
const app = express();
const HttpError = require('./controllers/HttpError')
const binsRouter = require("./controllers/bins")
// const cors = require('cors')
// const notesRouter = require('./controllers/notes')
// const middleware = require('./utils/middleware')
// const logger = require('./utils/logger')
const mongoose = require('mongoose')

// console.log(`connecting to MongoDB Database at: ${process.env.MONGODB_URI}`)

mongoose.connect(process.env.MONGODB_URI)//, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(express.static('public'));
app.use(express.json())
app.use("/api/bins", binsRouter)
app.use((req, res, next) => {
  const err = new HttpError("Route doesn't exist", 404)
  throw err
})

module.exports = app