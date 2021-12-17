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

app.set('trust proxy', 'loopback')
app.use(cors())

app.use(express.static('public'));
app.use(express.json())
app.use("/api/bins", binsRouter)

module.exports = app