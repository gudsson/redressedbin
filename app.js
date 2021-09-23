require('dotenv').config()
const express = require('express');
const app = express();
const binsRouter = require("./controllers/bins")
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

// const corsOptions = {
//     origin: ['http://bin.gudsson.ca','https://bin.gudsson.ca','http://localhost:3000'],
//     optionsSuccessStatus: 200 // For legacy browser support
// }

app.set('trust proxy', 'loopback')
app.use(cors())

app.use(express.static('public'));
app.use(express.json())
app.use("/api/bins", binsRouter)
// app.use((req, res, next) => {
//   const err = new HttpError("Route doesn't exist", 404)
//   throw err
// })

module.exports = app