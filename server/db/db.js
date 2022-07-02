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
function addStamp(post, db = connection) {
  return db('stamps').insert()
}
function addCollection(collection, db = connection) {
  return db('collections').insert(collection)
}
module.exports = { getCollections, getStamps, addStamp, addCollection }
