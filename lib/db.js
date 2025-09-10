import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // default user for WAMP MySQL
  password: '', // usually empty by default, unless you set one
  database: 'rankinventiv',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


export default pool;
