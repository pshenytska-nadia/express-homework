const express = require('express');
const router = express.Router();
const {
	getArticles,
	addArticle,
	updateTags,
} = require('../controllers/articles.controller');
const { validateBody } = require('../middleware/users.mdware');

router.get('/', getArticles);
router.post(
	'/',
	validateBody(['tags', 'id', 'name', 'description']),
	addArticle,
);
router.put('/:id', validateBody(['tags']), updateTags);

module.exports = router;
