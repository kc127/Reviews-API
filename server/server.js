const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const db = require('./dbsql');
const controllers = require('./controllers/index.js');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());


app.get('/reviews', controllers.reviews.get);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})

