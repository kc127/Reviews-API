const db = require('../dbsql');

/* increments helpfulness count by 1 */

const updateHelpfulness = (review_id, callback) => {
  const sqlStr = `UPDATE reviews SET helpfulness = helpfulness + 1 WHERE id = '${review_id}'`

  db.query(sqlStr, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports = { updateHelpfulness }