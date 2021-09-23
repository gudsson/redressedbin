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
      res.status(200).json(savedBin)
    })
    .catch(error => next(error))
})

binsRouter.get('/inspect/:id', (req, res, next) => {
  const binId = req.params.id

  Bin.findOne({ binId }).then(bin => {
    if (bin === null) {
      res.status(404).json({'msg': `Bin ${binId} not found`})
    } else {
      const ageInHours = ((new Date()) - bin.createdAt) / 3600000
      let data

      if (ageInHours > 48) {
        data = {'msg': `Bin ${binId} has expired`}
      } else {
        data = bin.requests.map(req => {
          return {
                method: req.request.method,
                path: req.request.path,
                createdAt: req.request.createdAt,
                fromIP: req.request.fromIP,
                body: req.request.body,
                headers: req.request.headers
          }
        }).reverse()
      }

      res.status(200).json(data)
    }
  })
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
    headers: req.headers,
    body: req.body,
    createdAt: new Date()
  }

  Bin.findOneAndUpdate({ binId: binId },  {$push: { requests: { request: reqObj } }}, { new: true } )
    .then( bin => {
      const MAX_LEN = 20
      if (bin && bin.requests.length > MAX_LEN) {
        bin.requests[bin.requests.length - MAX_LEN - 1].request.isActive = false
        bin.save()
      }
      
      res.status(200).json({ "ip_address": reqObj.fromIP })
    })
    .catch(error => next(error))
})

module.exports = binsRouter
