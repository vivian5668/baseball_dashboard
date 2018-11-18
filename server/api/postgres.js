const express = require('express')
const router = express.Router()

const { db } = require('../lib/database')

router.get('/api/postgres', (req, res, next) => {
  db.any('select * from hello')
    .then(data => {
      res.json(`${req.path} fetched ${JSON.stringify(data)} from the database`)
    })
    .catch(next)
})

router.get('/api/chart1', (req, res, next) => {
  db.any('SELECT "PLAY_OUTCOME", count(*) FROM "BattedBallData" GROUP BY "PLAY_OUTCOME"')
    .then(data => {
      res.json(JSON.stringify(data));
    })
    .catch(next)
})

module.exports = router
