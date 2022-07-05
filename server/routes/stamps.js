const express = require('express')

const db = require('../db/db')

const router = express.Router()
// GET v1/stamps
router.get('/', (req, res) => {
  db.getStamps()
    .then((stamp) => res.json(stamp))
    .catch((err) => console.error(err))
})
// GET v1/stamps/catalogs
router.get('/catalogs', (req, res) => {
  db.getCatalogs()
    .then((cat) => res.json(cat))
    .catch((err) => console.error(err))
})
// GET v1/stamps/types
router.get('/types', (req, res) => {
  db.getStampTypes()
    .then((t) => res.json(t))
    .catch((err) => console.error(err))
})
// GET v1/stamps/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  //console.log(id)
  db.getStampByID(id)
    .then((st) => {
      res.json(st)
    })
    .catch((err) => console.error(err))
})

// POST v1/stamps/add
router.post('/add', (req, res) => {
  const stamp = req.body
  //console.log('bob', stamp)
  db.addStamp(stamp)
    .then((id) => {
      //   //console.log('add stamp:', stamp, id)
      res.json(id)
      //   //res.redirect('/stamps')
    })
    .catch((err) => console.error(err))
})
//PATCH v1/stamps/update/:id
router.patch('/update/:id', (req, res) => {
  const id = req.params.id
  const stamp = req.body
  //console.log('stamp route', req.params.id, stamp)
  //console.log('id:', id)
  db.updateStamp(id, stamp)
    .then((st) => {
      //console.log('then')
      return res.json(st)
    })
    .catch((err) => console.error(err))
})
//Delete v1/stamps/delete/:id
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  //console.log('delete', id)
  db.delStamp(id)
    .then((del) => res.json(del))
    .catch((err) => res.status(500).send(err))
})

module.exports = router
