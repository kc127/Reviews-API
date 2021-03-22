const db = require('../dbsql');

/* increments helpfulness count by 1 */

const updateHelpfulness = (review_id, callback) => {
  const sqlStr = `UPDATE reviews SET helpfulness = helpfulness + 1 WHERE id = '${review_id}'`

  db.query(sqlStr, (err, results) => {
    if (err) {
      console.log('errror')
      callback(err, null);
    } else {
      console.log('hereee')
      callback(null, results);
    }
  })
}

module.exports = { updateHelpfulness }