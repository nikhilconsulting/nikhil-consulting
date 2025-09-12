// lib/cors.js
import Cors from 'cors';

// ✅ Allow CORS for file upload + credential use
const cors = Cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ✅ include OPTIONS for preflight
  allowedHeaders: ['Content-Type', 'Authorization'],     // ✅ for JWT or token headers
  credentials: true, // ✅ allow cookies or Authorization headers
});

export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default cors;
