const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: String(process.env.DB_PASS),
  port: process.env.DB_PORT,
});

app.post('/submit', async (req, res) => {
  const { name, carYear, carModel, city, email, phone, details } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO cars (name, car_year, car_model, city, email, phone, details) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, carYear, carModel, city, email, phone, details],
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
