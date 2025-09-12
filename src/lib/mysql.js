import mysql from 'mysql2/promise';

// Note: Next.js automatically loads environment variables from `.env` files,
// so no need to call dotenv.config() manually here.

const db = mysql.createPool({
  host: process.env.HOST,       // .env me HOST=...
  user: process.env.USER,       // .env me USER=...
  password: process.env.PASSWORD, // .env me PASSWORD=...
  database: process.env.DATABASE, // .env me DATABASE=...
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function checkConnection() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('✅ Database connected:', rows);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
}

// Call it only once (during dev or startup)
if (process.env.NODE_ENV !== 'production') {
  checkConnection();
}

export default db;
