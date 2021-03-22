const models = require('../models');

const reportReview = ((req, res) => {

  models.report.reportReview(req.params.review_id,(err, data) => {
    if (err) {
      res.status(404);
    } else {
      res.status(201);
    }
  })
});

module.exports = { reportReview };