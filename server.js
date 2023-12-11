const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./middleware/errors.mdware');
const usersRouter = require('./routes/users');
const statsRouter = require('./routes/statistics');
const articlesRouter = require('./routes/articles');

const port = 3000;

app.use(express.json());
app.use(morgan('tiny'));
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.use('/stats', statsRouter);

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});
