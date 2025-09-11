import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root', // default user for WAMP MySQL
//   password: '', // usually empty by default, unless you set one
//   database: 'rankinventiv',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });


const pool = mysql.createPool({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12798187', // default user for WAMP MySQL
  password: 'aZLl7UNLgk', // usually empty by default, unless you set one
  database: 'sql12798187',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});



export default pool;
