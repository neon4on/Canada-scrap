const nodemailer = require('nodemailer');
require('dotenv').config(); // Загружаем переменные окружения из файла .env

// Создаем SMTP-транспорт с данными из .env
const transporter = nodemailer.createTransport({
  service: 'gmail', // Можно заменить на другой SMTP-сервер, если используешь что-то другое
  auth: {
    user: process.env.EMAIL_USER, // Почта, с которой отправляются письма
    pass: process.env.EMAIL_PASS, // Пароль или пароль приложения для Gmail
  },
});

// Функция для отправки письма
const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // От кого письмо
    to: to, // Кому отправляется письмо
    subject: subject, // Тема письма
    text: text, // Текст письма
  };

  // Отправляем письмо
  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendMail;
