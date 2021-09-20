const binsRouter = require('express').Router()
const Bin = require('../models/bin')

binsRouter.all('/:id', (req, res, next) => {
  const binId = req.params.id
  console.log(req)
  res.json({'msg': `bin ${binId} has been hit`})
})

module.exports = binsRouter