import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import axios from 'axios'; // Для отправки данных на сервер

function CarForm() {
  const [formData, setFormData] = useState({
    name: '',
    carYear: '',
    carModel: '',
    city: '',
    email: '',
    phone: '',
    details: '',
  });

  const [errors, setErrors] = useState({});

  // Валидация полей
  const validate = () => {
    let tempErrors = {};

    // Валидация поля Name (только слова)
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      tempErrors.name = 'Name can only contain letters and spaces';
    }

    // Валидация года (4 цифры)
    if (!/^\d{4}$/.test(formData.carYear)) {
      tempErrors.carYear = 'Car year must be exactly 4 digits';
    }

    // Валидация поля City (только слова)
    if (!/^[A-Za-z\s]+$/.test(formData.city)) {
      tempErrors.city = 'City can only contain letters and spaces';
    }

    // Валидация номера телефона (формат телефона)
    if (
      !/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        formData.phone,
      )
    ) {
      tempErrors.phone = 'Phone number is not valid';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Запрещаем ввод недопустимых символов
    if (name === 'name' || name === 'city') {
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'carYear') {
      if (/^\d{0,4}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'phone') {
      if (/^[0-9+\-\(\)\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:5000/submit', formData); // Меняем URL на адрес бэкенда
        console.log('Form submitted successfully', response.data);
      } catch (error) {
        console.error('Error submitting form', error);
      }
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <Container sx={{ paddingY: { xs: 4, md: 6 }, backgroundColor: 'white' }}>
      <Typography variant="h4" gutterBottom>
        Submit Your Car Information
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          label="Car Year"
          name="carYear"
          value={formData.carYear}
          onChange={handleChange}
          required
          type="text"
          error={!!errors.carYear}
          helperText={errors.carYear}
        />
        <TextField
          label="Car Model"
          name="carModel"
          value={formData.carModel}
          onChange={handleChange}
          required
        />
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          error={!!errors.city}
          helperText={errors.city}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          type="email"
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <TextField
          label="Additional Details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: '#4caf50', color: 'white' }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default CarForm;
