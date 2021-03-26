var mysql = require('mysql');

const db = mysql.createPool({
  host:'localhost',
  port: 3306,
  user:'root',
  password:'password',
  database:'retaildb',
  waitForConnections: true,
  connectionLimit:10,
  queueLimit: 0
});

db.connect((err) => {
  if(err){
    console.log("err connecting to mysql");
    return;
  }
  console.log("successfully connected to mysql")
})

module.exports = db;

// var mysql = require('mysql');

// const db = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'password',
//   database:'retaildb'
// });

// db.connect((err) => {
//   if(err){
//     console.log("err connecting to mysql");
//     return;
//   }
//   console.log("successfully connected to mysql")
// })

// module.exports = db;

