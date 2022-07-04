const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
//const connection = require('./connection')

function addCollection(collection, db = connection) {
  return db('collections').insert(collection)
}
function addStamp(post, db = connection) {
  //console.log('post add stamps', post)
  return db('stamps').insert(post)
}

function getStamps(db = connection) {
  return db('stamps')
    .join('stampTypes', 'stamps.stamp_type_id', 'stampTypes.id')
    .join('catalogs', 'stamps.catalog_id', 'catalogs.id')
    .select(
      'stamps.id',
      'stamps.name',
      'stamps.number as Number',
      'stampTypes.name as Type',
      'catalogs.name as Catalog',
      'stamps.retired',
      'stamps.bundle',
      'stamps.price'
    )
}

// Enums tables
function getCatalogs(db = connection) {
  return db('catalogs').select()
}
function getStampTypes(db = connection) {
  return db('StampTypes').select()
}
function getCollections(db = connection) {
  return db('collections').select()
}

module.exports = {
  getCollections,
  getStamps,
  getCatalogs,
  getStampTypes,
  addStamp,
  addCollection,
}
