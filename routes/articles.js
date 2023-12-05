const express = require('express')
const router = express.Router()
const { getArticles, addArticle, updateTags } = require('../controllers/articles.controller')

router.get('/', getArticles)
router.post('/', addArticle)
router.put('/:id', updateTags)

module.exports = router