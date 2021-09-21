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

binsRouter.get('/', async (req, res, next) => {
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
  let body = req.body
  let headers = req.headers
  let method = req.method

  console.log(`ip: ${req.ip}`)
  console.log(`ips: ${req.ips}`)
  console.log(`hostname: ${req.hostname}`)
  console.log(`originalUrl: ${req.originalUrl}`)
  console.log(`path: ${req.path}`)
  // console.log(req.route)
  // console.log(req.socket)
  // console.log(`subdomains: ${req.subdomains}`)
  res.json({ method, headers, body })
  // res.json({'msg': `bin ${binId} has been hit`})
})

module.exports = binsRouter