const express = require('express')
const router = express.Router()
const { worstHomeworkScore, getStatsByName } = require('../controllers/stats.controller')

router.get('/worst-homework-score', worstHomeworkScore)
router.get('/:name', getStatsByName)

module.exports = router
