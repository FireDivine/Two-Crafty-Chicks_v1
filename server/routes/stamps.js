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
router.get('/:id', (req, res) => {
  const id = req.params.id
  //console.log(id)
  db.getStampByID(id)
    .then((st) => {
      res.json(st)
    })
    .catch((err) => console.error(err))
})
router.post('/add', (req, res) => {
  const stamp = req.body
  console.log('bob', stamp)
  db.addStamp(stamp)
    .then((id) => {
      //   //console.log('add stamp:', stamp, id)
      res.json(id)
      //   //res.redirect('/stamps')
    })
    .catch((err) => console.error(err))
})
router.patch('/:id', (req, res) => {
  const id = req.params.id
  const stamp = req.body
  console.log('stamp route', req.params.id, stamp)
  console.log('id:', id)
  db.updateStamp(stamp.id, stamp)
    .then((st) => {
      console.log('then')
      return res.json(st)
    })
    .catch((err) => console.error(err))
})
module.exports = router
