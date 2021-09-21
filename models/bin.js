const mongoose = require('mongoose')

const binSchema = new mongoose.Schema({
  binId: String, //TODO: unique constraint
  requests: [{
    request: new mongoose.Schema(
      {
        originalUrl: String,
        baseUrl: String,
        path: String,
        method: String,
        fromIP: String,
        fromIPs: { type: Array, default: [] },
        headers: { type: {}, default: {} },
        body: { type: {}, default: {} },
        isActive: { type: Boolean, default: true },
      }, { timestamps: true }
    )
  }]
}, { timestamps: true }, { minimize: false })

module.exports = mongoose.model('Bin', binSchema)