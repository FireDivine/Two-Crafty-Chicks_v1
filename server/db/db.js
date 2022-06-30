const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
//const connection = require('./connection')
function getCollections(db = connection) {
  return db('collections').select()
}
function getStamps(db = connection) {
  return db('stamps').select()
}
module.exports = { getCollections, getStamps }
