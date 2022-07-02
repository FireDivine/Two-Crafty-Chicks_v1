const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCollections()
    .then((col) => res.json(col))
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})
router.post('/add', (req, res) => {
  const collection = req.body
  console.log(res.body)
  db.addCollection(collection)
    .then((id) => {
      res.json(id)
      console.log(id)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})
module.exports = router
