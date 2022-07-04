const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStamps()
    .then((stamp) => res.json(stamp))
    .catch((err) => console.error(err))
})
router.post('/add', (req, res) => {
  const stamp = res.body
  db.addStamp(stamp)
    .then((id) => {
      res.json(id)
    })
    .catch((err) => console.error(err))
})

module.exports = router
