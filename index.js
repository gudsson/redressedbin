require('dotenv').config()
const app = require('./app')
const http = require('http')

const server = http.createServer(app)

const BACKEND_PORT = process.env.BACKEND_PORT || 3001
server.listen(BACKEND_PORT, () => {
  console.log(`Server running on port ${BACKEND_PORT}`)
})
