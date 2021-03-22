const db = require('../dbsql');

/* update review to show report, does not delete the review, but GET request does not return it */

const reportReview = (review_id, callback) => {
  
  const sqlStr = `UPDATE reviews SET reported = 1 WHERE id = '${review_id}'`;
  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
};

module.exports = { reportReview }