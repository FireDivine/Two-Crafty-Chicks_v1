const express = require('express')
const path = require('path')

const collectionRoutes = require('./routes/collections')
const stampsRoutes = require('./routes/stamps')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/v1/collections', collectionRoutes)
server.use('/v1/stamps', stampsRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
