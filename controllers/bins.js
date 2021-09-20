const binsRouter = require('express').Router()
const Bin = require('../models/bin')

binsRouter.all('/:id', (req, res, next) => {
  const binId = req.params.id
  let body = req.body
  let headers = req.headers
  let method = req.method
  
  console.log(req)
  res.json({ method, headers, body })
  // res.json({'msg': `bin ${binId} has been hit`})
})

module.exports = binsRouter