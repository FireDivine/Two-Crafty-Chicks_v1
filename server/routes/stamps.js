const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStamps()
    .then((stamp) => res.json(stamp))
    .catch((err) => console.error(err))
})
router.get('/catalogs', (req, res) => {
  db.getCatalogs()
    .then((cat) => res.json(cat))
    .catch((err) => console.error(err))
})
router.get('/types', (req, res) => {
  db.getStampTypes()
    .then((t) => res.json(t))
    .catch((err) => console.error(err))
})
router.post('/add', (req, res) => {
  const stamp = req.body
  console.log('bob', stamp)
  db.addStamp(stamp)
    .then((id) => {
      //   //console.log('add stamp:', stamp, id)
      //   //res.json(id)
      //   //res.redirect('/stamps')
    })
    .catch((err) => console.error(err))
})

module.exports = router
