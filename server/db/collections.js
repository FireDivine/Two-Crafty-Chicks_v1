const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function addCollection(collection, db = connection) {
  return db('collections').insert(collection)
}
function getCollections(db = connection) {
  return db('collections').select()
}
module.exports = {
  getCollections,
  addCollection,
}
