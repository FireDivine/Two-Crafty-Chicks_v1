const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStamps()
    .then((stamp) => res.json(stamp))
    .catch((err) => console.err(err))
})

module.exports = router
