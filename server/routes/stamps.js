const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStamps()
    .then((stamp) => res.json(stamp))
    .catch((err) => console.error(err))
})
router.post('/add', (req, res) => {
  const stamp = req.body
  console.log('bob', stamp)
  db.addStamp(stamp)
    .then((id) => {
      console.log('add stamp:', stamp, id)
      res.json(id)
    })
    .catch((err) => console.error(err))
})

module.exports = router
