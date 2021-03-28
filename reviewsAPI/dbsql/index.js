// var mysql = require('mysql');

// const db = mysql.createPool({
//   host:'ec2-3-90-82-232.compute-1.amazonaws.com',
//   port: 3306,
//   user:'user1',
//   password:'password',
//   database:'retaildb',
//   waitForConnection: true,
//   connectionLimit:1000,
//   connectionTimeout: 60*60*1000,
//   queueLimit: 0
// });

// db.getConnection((err) => {
//   if(err){
//     console.log("err connecting to mysql",err);
//     return;
//   }
//   console.log("successfully connected to mysql")
// })

// module.exports = db;

/* */

var mysql = require('mysql');

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'retaildb'
});

db.connect((err) => {
  if(err){
    console.log("err connecting to mysql");
    return;
  }
  console.log("successfully connected to mysql")
})

module.exports = db;


