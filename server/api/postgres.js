const express = require('express')
const router = express.Router()

const { db } = require('../lib/database')

router.get('/api/chart1', (req, res, next) => {
  db.any('SELECT "PLAY_OUTCOME", count(*) FROM "BattedBallData" GROUP BY "PLAY_OUTCOME"')
    .then(data => {
      res.json(JSON.stringify(data));
    })
    .catch(next)
})

router.get('/api/chart2', (req, res, next) => {
  db.any('SELECT "PLAY_OUTCOME", ROUND(avg("EXIT_SPEED")::numeric,2) FROM "BattedBallData" GROUP BY "PLAY_OUTCOME"')
    .then(data => {
      res.json(JSON.stringify(data));
    })
    .catch(next)
})

router.get('/api/chart3', (req, res, next) => {
  db.any('SELECT "PLAY_OUTCOME", ROUND(avg("LAUNCH_ANGLE")::numeric,2) FROM "BattedBallData" GROUP BY "PLAY_OUTCOME"')
    .then(data => {
      res.json(JSON.stringify(data));
    })
    .catch(next)
})

router.get('/api/chart4', (req, res, next) => {
  db.any('SELECT "PLAY_OUTCOME", ROUND(avg("HIT_SPIN_RATE")::numeric,2) FROM "BattedBallData" GROUP BY "PLAY_OUTCOME"')
    .then(data => {
      res.json(JSON.stringify(data));
    })
    .catch(next)
})



module.exports = router
