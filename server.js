const express = require('express');
const app = express();
const port = 3000;

// Express Routes
const usersRouter = require('./router/users');
const fruitsRouter = require('./router/fruits');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/users', usersRouter);
app.use('/fruits', fruitsRouter);

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
