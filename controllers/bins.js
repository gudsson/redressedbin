const binsRouter = require('express').Router()
const Bin = require('../models/bin')

const generateId = (size) => {
  const arr = new Array(size).fill(0)
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  return arr.map(val => chars[Math.floor(Math.random() * chars.length - 1)]).join('')
}

const isIdUnique = async(binId) => {
  return Bin.find({ binId })
    .then(bins => {
      return !bins.length
    })
}

binsRouter.get('/', async (req, res, next) => { // DONE
  let binId = generateId(8)

  while (!(await isIdUnique(binId))) {
    binId = generateId(8)
  }

  const bin = new Bin({
    binId,
    requests: []
  })

  bin.save()
    .then(savedBin => {
      res.json(savedBin)
    })
    .catch(error => next(error))
})

binsRouter.all('/:id', (req, res, next) => {
  const binId = req.params.id

  let reqObj = {
    originalUrl: req.originalUrl,
    baseUrl: req.baseUrl,
    path: req.path,
    method: req.method,
    fromIP: req.ip,
    fromIPs: req.ips,
    headers: {},
    body: {},
    createdAt: new Date()
  }

  Bin.findOneAndUpdate({ binId: binId },  {$push: { requests: { request: reqObj } }}, { new: true } )
    .then(updatedBin => {
      res.json(updatedBin)
    })
    .catch(error => next(error))

  Bin.findOne({ binId: binId })
    .then(bin => {
      if (bin.requests && bin.requests.length > 20) {
        const len = bin.request.length
        const name = `requests.${len}.isActive`
        Bin.findOneAndUpdate({ binId: binId }, { "$set": { name: true }})
      }
    })
})

module.exports = binsRouter