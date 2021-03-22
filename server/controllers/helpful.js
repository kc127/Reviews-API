const models = require('../models');

const updateHelpfulness = (req, res) => {
  
  models.helpful.updateHelpfulness(req.params.review_id, (err, data) => {
    if (err) {
      res.status(404);
    } else {
      console.log("done", data);
      res.status(201);
    }
  })
}

module.exports = { updateHelpfulness }