// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const connection = require('knex')(config)
const connection = require('./connection')
function getAllCards(db = connection) {
  return db('cards').select()
}

module.exports = {
  getAllCards,
}
