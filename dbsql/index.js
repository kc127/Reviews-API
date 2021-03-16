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