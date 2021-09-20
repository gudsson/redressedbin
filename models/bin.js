const mongoose = require('mongoose')

const binSchema = new mongoose.Schema({
  binID: String,
  requests: {}
})

module.exports = mongoose.model('Bin', binSchema)