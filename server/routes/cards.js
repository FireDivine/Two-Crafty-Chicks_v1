const express = require('express')

const db = require('../db/cards')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllCards()
    .then((card) => res.json(card))
    .catch(() => {
      //console.error(err)
      res.status(500).send('Server error')
    })
})
