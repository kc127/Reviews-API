const db = require('../dbsql');

const getRatings = (product_id, callback) => {

  const sqlStr = `SELECT SUM(rating = 0), SUM(rating = 1), SUM(rating = 2), SUM(rating = 3), SUM(rating = 4), SUM(rating = 5), SUM(recommend = 1), SUM(recommend = 0) FROM reviews WHERE product_id = '${product_id}'`;

  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

const getCharacteristics = (product_id, callback) => {

  const sqlStr = `SELECT characteristics.id, characteristics.characteristics_name, characteristics_reviews.characteristics_value
  FROM characteristics
  INNER JOIN
    (SELECT characteristics_id
    FROM characteristics_product
    WHERE product_id = '${product_id}') b
    ON b.characteristics_id = characteristics.id
  INNER JOIN characteristics_reviews
    ON b.characteristics_id = characteristics_reviews.characteristics_id`;

  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}


module.exports = { getRatings, getCharacteristics };