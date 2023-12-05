const express = require('express')
const app = express()
const usersRouter = require('./routes/users')
const statsRouter = require('./routes/statistics')
const articlesRouter = require('./routes/articles')

const port = 3000

app.use(express.json())
app.use('/users', usersRouter)
app.use('/articles', articlesRouter)
app.use('/stats', statsRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})