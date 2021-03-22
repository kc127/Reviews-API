const db = require('../dbsql');

const getRatings = (product_id, callback) => {

  const sqlStr = `SELECT AVG(rating), SUM(recommend = 1), SUM(recommend = 0) FROM reviews WHERE product_id = '${product_id}'`;

  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

const getCharacteristicsID = (product_id, callback) => {

  const sqlStr = `SELECT characteristics_product.characteristics_id, characteristics.characteristics_name
  FROM characteristics_product
  INNER JOIN characteristics ON 
  WHERE product_id = '${product_id}'`;

  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}


module.exports = { getRatings, getCharacteristicsID };