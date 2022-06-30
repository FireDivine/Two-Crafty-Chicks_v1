const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCollections()
    .then((col) => res.json(col))
    .catch((err) => console.err(err))
})

module.exports = router
