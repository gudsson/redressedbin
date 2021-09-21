const mongoose = require('mongoose')

const binSchema = new mongoose.Schema({
  binId: String,
  requests: []
})

module.exports = mongoose.model('Bin', binSchema)