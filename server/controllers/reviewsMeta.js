const models = require('../models');

const getMetaReviews = ((req, res) => {
  const product_id = 5000;
  models.reviewsMeta.getRatings(product_id, (err, data) => {
    if (err) {
      res.status(404);
    } else {
      // console.log("here")
      // res.send(data);
      models.reviewsMeta.getCharacteristicsID(product_id, (err, data) => {
        if(err){
          res.status(404);
        } else {
          res.send(data);
        }
      })
    }
  });
});

module.exports = { getMetaReviews };