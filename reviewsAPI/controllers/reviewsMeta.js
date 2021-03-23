const models = require('../models');

const getMetaReviews = ((req, res, next) => {
  const product_id = 5000;
  const metaReview = {};
  metaReview['product_id'] = product_id;
  models.reviewsMeta.getRatings(product_id, (err, data) => {
    if (err) {
      res.status(404);
    } else {
      metaReview['ratings'] = data[0]['AVG(rating)'];
      metaReview['recommend'] = {};
      metaReview['recommend']['true'] = data[0]['SUM(recommend = 1)']
      metaReview['recommend']['false'] = data[0]['SUM(recommend = 0)']
      models.reviewsMeta.getCharacteristics(product_id, (err, data) => {
      metaReview['characteristics'] = {};
      if (err) {
        res.status(404);
      } else {
        for (char of data) {
          const charIdValue = {};
          charIdValue[char.id] = char.characteristics_value;
          metaReview['characteristics'][char.characteristics_name] = charIdValue
        }
          res.send(metaReview);
          next()
        }
      })
    }
  });
});

module.exports = { getMetaReviews };