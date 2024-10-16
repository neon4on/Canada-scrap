const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const generateEmailTemplate = require('./utils/emailTemplate'); // Импортируем наш HTML-шаблон

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

// Настройка Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Обработчик для записи в БД и отправки письма
app.post('/submit', async (req, res) => {
  const {
    name,
    carMake,
    carModel,
    carYear,
    mileage,
    isDrivable,
    location,
    email,
    phone,
    details,
  } = req.body;

  try {
    // Записываем данные в базу
    const result = await pool.query(
      'INSERT INTO cars (name, car_make, car_model, car_year, mileage, is_drivable, location, email, phone, details) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [name, carMake, carModel, carYear, mileage, isDrivable, location, email, phone, details]
    );

    // Генерируем HTML-письмо с использованием шаблона
    const emailTemplate = generateEmailTemplate({
      name,
      carMake,
      carModel,
      carYear,
      mileage,
      isDrivable,
      location,
      email,
      phone,
      details,
    });

    // Настраиваем письмо
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Car Submission',
      html: emailTemplate, // Используем HTML-шаблон вместо обычного текста
    };

    // Отправляем письмо
    await transporter.sendMail(mailOptions);

    res.json(result.rows[0]); // Возвращаем запись, которая была добавлена в базу
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
