const db = require('../dbsql');

const getReviews = (product_id, callback) => {

  const sqlStr = `SELECT reviews.product_id, reviews.id, reviews.rating, reviews.summary, reviews.recommend, reviews.response, reviews.body, reviews.review_date, reviews.reviewer_name, reviews.helpfulness, photos.photo_url FROM reviews INNER JOIN photos ON photos.reviews_id=reviews.id WHERE reviews.product_id = ? AND reviews.reported = 0`;


  db.query(sqlStr, [product_id], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

const postReview = (review, callback) => {

  const sqlStr = `INSERT INTO reviews (product_id, rating, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES ('${review.product_id}', '${review.rating}', '${review.summary}','${review.body}','${review.recommend}','${review.reported}', '${review.reviewer_name}', '${review.reviewer_email}', '${review.response}', '${review.helpfulness}')`;

  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

const postPhotos = (review_id, photo, callback) => {
  const sqlStr = `INSERT INTO photos (reviews_id, photo_url) VALUES ('${review_id}', '${photo}')`;
  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

const postCharacteristics = (char, callback) => {
  const sqlStr = `INSERT INTO characteristics (characteristics_name) VALUES ('${char}')`;
  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

const postCharProduct = (char_id, product_id, callback) => {

  const sqlStr = `INSERT INTO characteristics_product (characteristics_id, product_id) VALUES ('${char_id}', '${product_id}')`;

  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
};

const postCharReviews = (char_id, review_id, charProp, callback) => {
  const sqlStr = `INSERT INTO characteristics_reviews (characteristics_id, reviews_id, characteristics_value) VALUES ('${char_id}', '${review_id}', '${Object.values(charProp)[0]}')`;

  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}


module.exports = { getReviews, postReview, postPhotos, postCharacteristics, postCharProduct, postCharReviews };