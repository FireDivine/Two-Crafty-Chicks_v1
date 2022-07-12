const express = require('express')

const db = require('../db/collections.js')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCollections()
    .then((col) => res.json(col))
    .catch(() => {
      //console.error(err)
      res.status(500).send('Server error')
    })
})
router.post('/add', (req, res) => {
  const collection = req.body
  // console.log('routees post', collection)
  db.addCollection(collection)
    .then(() => {
      //res.redirect('/collections')
      //console.log('added', id)
    })
    .catch(() => {
      //console.error(err)
      res.status(500).send('Server error')
    })
})
module.exports = router
