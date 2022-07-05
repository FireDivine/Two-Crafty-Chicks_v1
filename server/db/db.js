const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
//const connection = require('./connection')

function addCollection(collection, db = connection) {
  return db('collections').insert(collection)
}
function addStamp(post, db = connection) {
  //console.log('post add stamps', post)

  let catalogID = getIdOfCatalog(post.catalog)
  let stampType = getIdOfType(post.type)
  // console.log('tt', catalogID, stampType)
  return db('stamps').insert({
    name: post.name,
    number: post.number,
    retired: post.retired,
    bundle: post.bundle,
    price: post.price,
    stamp_type_id: stampType,
    catalog_id: catalogID,
  })
}
function updateStamp(id, stamp, db = connection) {
  console.log('db file: ', stamp)
  let catalogID = getIdOfCatalog(stamp.Catalog)
  let stampType = getIdOfType(stamp.Type)

  return db('stamps')
    .update({
      name: stamp.name,
      Number: stamp.number,
      retired: stamp.retired,
      bundle: stamp.bundle,
      price: stamp.price,
      stamp_type_id: stampType,
      catalog_id: catalogID,
    })
    .where({ id })
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
function getStampByID(id, db = connection) {
  return db('stamps')
    .join('stampTypes', 'stamps.stamp_type_id', 'stampTypes.id')
    .join('catalogs', 'stamps.catalog_id', 'catalogs.id')
    .where('stamps.id', id)
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
function getIdOfType(name, db = connection) {
  return db('StampTypes').select('id').where({ name })
}
function getIdOfCatalog(name, db = connection) {
  return db('catalogs').select('id').where({ name })
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
  getStampByID,
  updateStamp,
}
