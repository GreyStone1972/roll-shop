import mysql from "mysql2"
 
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'enotovid', //password for my database
  database: 'pos_db' //name of my database
  //if you create your own database, enter your password and name
});

export default db