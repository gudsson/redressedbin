require('dotenv').config()
// const config = require('./utils/config')
const express = require('express');
const app = express();
const HttpError = require('./controllers/HttpError')
const binsRouter = require("./controllers/bins")
const cors = require('cors')
// const notesRouter = require('./controllers/notes')
// const middleware = require('./utils/middleware')
// const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Request_Records")//process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.set('trust proxy', 'loopback')
app.use(cors(corsOptions))

app.use(express.static('public'));
app.use(express.json())
app.use("/api/bins", binsRouter)
// app.use((req, res, next) => {
//   const err = new HttpError("Route doesn't exist", 404)
//   throw err
// })

module.exports = app