const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Загружаем переменные окружения
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Подключение к базе данных
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Маршрут для отправки формы и сохранения данных
app.post('/submit', async (req, res) => {
  const { fullName, carYear, carModel, city, email, phone, details } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO cars (full_name, car_year, car_model, city, email, phone, details) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [fullName, carYear, carModel, city, email, phone, details],
    );

    // Настройка отправки email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Scrap Car Canada - Your Request Received',
      text: `Hello, ${fullName}. We have received your request to scrap your car. We will get back to you shortly.`,
    };

    // Отправка email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).send('Error sending email'); // Завершаем выполнение, если ошибка
      }
      console.log('Email sent: ' + info.response);
      res.json(result.rows[0]); // Ответ клиенту отправляем только при успехе
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
