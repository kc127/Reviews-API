const models = require('../models');

const updateHelpfulness = (req, res, next) => {

  models.helpful.updateHelpfulness(req.params.review_id, (err, data) => {
    if (err) {
      res.status(404);
    } else {
      console.log("done", data);
      res.status(201);
      next()
    }
  })
}

module.exports = { updateHelpfulness }