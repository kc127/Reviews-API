const models = require('../models');

const get = (req, res) => {
  const product_id = 5001;
  models.reviews.getReviews(product_id, (err, data) => {
    if(err){
      res.status(400);
    } else {
      const reviews = {};
      const results = [];
      reviews['product'] = data[0].product_id;
      reviews['results'] = results;
      for(var review of data) {
        const eachReview = {};
        eachReview['review_id'] = review.id;
        eachReview['rating'] = review.rating;
        eachReview['summary'] = review.summary;
        eachReview['recommend'] = review.recommend;
        eachReview['response'] = review.response;
        eachReview['body'] = review.body;
        eachReview['date'] = review.review_date;
        eachReview['reviewer_name'] = review.reviewer_name;
        eachReview['helpfulness'] = review.helpfulness;
        eachReview['photos'] = [review.photo_url]
        results.push(eachReview);
      }
      res.send(reviews);
    }
  })
}

module.exports = { get };