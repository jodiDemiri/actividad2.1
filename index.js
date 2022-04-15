//here youre creating a web server
const express = require('express');
const app = express();
const port = 500;

app.listen(port, () => console.log('Express is running..'));

app.use(express.json())

const singers = require('./models/singers');

const singersRouter = require('./routes/singer')
app.use('/singer', singersRouter)