const db = require('../dbsql');

const getReviews = (product_id, callback) => {
  const sqlStr = `SELECT reviews.product_id, reviews.id, reviews.rating, reviews.summary, reviews.recommend, reviews.reported, reviews.response, reviews.body, reviews.review_date, reviews.reviewer_name, reviews.helpfulness, photos.photo_url FROM reviews INNER JOIN photos ON photos.reviews_id=reviews.id WHERE reviews.product_id = ?`;

  //const sqlStr = 'SELECT * FROM reviews WHERE id = 5777922';

  db.query(sqlStr,[product_id],(err, results) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}



module.exports = { getReviews };