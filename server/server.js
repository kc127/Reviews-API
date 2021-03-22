require('newrelic');
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

app.get('/reviews', controllers.reviews.getReviews);
app.get('/reviews/meta', controllers.reviewsMeta.getMetaReviews);
app.post('/reviews', controllers.reviews.postReview);
app.put('/reviews/:review_id/helpful', controllers.helpful.updateHelpfulness);
app.put('/reviews/:review_id/report', controllers.report.reportReview)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})

