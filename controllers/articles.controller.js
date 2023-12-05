const articles = require('../data/articles')

const getArticles = (req, res) => {
    res.status(200).json(articles)
}

const addArticle = (req, res) => {
    const article = req.body
    articles.push(article)

    res.status(200).json(articles)
}

const updateTags = (req, res) => {
    const id = parseInt(req.params.id)
    const index = articles.findIndex(a => a.id == id)
    const { tags } = req.body
    articles[index] = {
        ...articles[index],
        tags: tags
    }

    res.status(200).json(articles[index])
}

module.exports = { getArticles, addArticle, updateTags }