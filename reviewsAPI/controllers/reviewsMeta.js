const models = require('../models');
const bodyParser = require('body-parser');

const getMetaReviews = ((req, res, next) => {

  const product_id = req.query.product_id || 1;
  const metaReview = {};
  metaReview['product_id'] = product_id;
  models.reviewsMeta.getRatings(product_id, (err, data) => {
    if (err) {
      res.status(404);
    } else {
      metaReview['ratings'] = {};
      metaReview['ratings']["0"] = String(data[0]['SUM(rating = 0)']);
      metaReview['ratings']["1"] = String(data[0]['SUM(rating = 1)']);
      metaReview['ratings']["2"] = String(data[0]['SUM(rating = 2)']);
      metaReview['ratings']["3"] = String(data[0]['SUM(rating = 3)']);
      metaReview['ratings']["4"] = String(data[0]['SUM(rating = 4)']);
      metaReview['ratings']["5"] = String(data[0]['SUM(rating = 5)']);
      metaReview['recommended'] = {};
      metaReview['recommended']['true'] = String(data[0]['SUM(recommend = 1)'])
      metaReview['recommended']['false'] = String(data[0]['SUM(recommend = 0)'])
      models.reviewsMeta.getCharacteristics(product_id, (err, data) => {
      metaReview['characteristics'] = {};
      if (err) {
        res.status(404);
      } else {
        for (char of data) {
          const charIdValue = {};
          charIdValue['id'] = char.id
          charIdValue['value'] = String(char.characteristics_value);
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