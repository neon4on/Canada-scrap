import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import CarBrandsTicker from './CarBrandsTicker'; // Импортируем компонент бегущей строки
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CarForm() {
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    carYear: '',
    mileage: '',
    isDrivable: '', // будет true или false, но по умолчанию пусто
    location: '',
    name: '',
    phone: '',
    email: '',
    details: ''
  });

  const [errors, setErrors] = useState({});

  // Валидация полей при отправке формы
  const validate = () => {
    let tempErrors = {};

    if (!formData.carMake) {
      tempErrors.carMake = 'Car make is required';
    }
    if (!formData.carModel) {
      tempErrors.carModel = 'Model is required';
    }
    if (!/^\d{4}$/.test(formData.carYear)) {
      tempErrors.carYear = 'Car year must be exactly 4 digits';
    }
    if (formData.isDrivable === '') {
      tempErrors.isDrivable = 'Is the car drivable is required';
    }
    if (!formData.location) {
      tempErrors.location = 'Location is required';
    }
    if (!formData.name) {
      tempErrors.name = 'Name is required and must contain only letters';
    }
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      tempErrors.name = 'Name can only contain letters and spaces';
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(formData.phone)) {
      tempErrors.phone = 'Phone number is not valid';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Функция для изменения данных в форме с проверкой на корректные символы
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ограничение на ввод только допустимых символов для каждого поля
    if (name === 'name') {
      // Разрешаем только буквы и пробелы
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'phone') {
      // Разрешаем только цифры, пробелы, "-", "+", "(", ")"
      if (/^[\d+\s().-]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'carYear' || name === 'mileage') {
      // Разрешаем только цифры
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Функция для изменения состояния булевого значения (выбор Да/Нет)
  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, isDrivable: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Преобразуем нужные поля в INT и BOOL перед отправкой
        const preparedData = {
          ...formData,
          carYear: parseInt(formData.carYear, 10),  // Преобразование года в число
          mileage: formData.mileage ? parseInt(formData.mileage, 10) : null,  // Преобразование пробега в число
          isDrivable: formData.isDrivable === 'true'  // Преобразование в boolean
        };

        const response = await axios.post('/api/submit', preparedData);
        console.log('Form submitted successfully', response.data);
        toast.success('Thank you for your request! Our specialist will contact you shortly.');
      } catch (error) {
        console.error('Error submitting form', error);
        toast.error('Error submitting form. Please try again.');
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

      {/* Бегущая строка с брендами перед формой */}
      <CarBrandsTicker />

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Car Make"
              name="carMake"
              value={formData.carMake}
              onChange={handleChange}
              required
              error={!!errors.carMake}
              helperText={errors.carMake}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Model"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
              error={!!errors.carModel}
              helperText={errors.carModel}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Car Year"
              name="carYear"
              value={formData.carYear}
              onChange={handleChange}
              required
              error={!!errors.carYear}
              helperText={errors.carYear}
              fullWidth
              inputProps={{ maxLength: 4 }}  // Ограничение длины для года
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Approximate Mileage"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              fullWidth
              inputProps={{ maxLength: 7 }}  // Ограничение длины для пробега
            />
          </Grid>

          {/* Выбор да/нет для булевого значения */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required error={!!errors.isDrivable}>
              <InputLabel id="is-drivable-label">Is the Car Drivable?</InputLabel>
              <Select
                labelId="is-drivable-label"
                name="isDrivable"
                value={formData.isDrivable}
                onChange={handleSelectChange}
                label="Is the Car Drivable?"
              >
                <MenuItem value="true">Yes</MenuItem>
                <MenuItem value="false">No</MenuItem>
              </Select>
              {errors.isDrivable && <Typography variant="caption" color="error">{errors.isDrivable}</Typography>}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              error={!!errors.location}
              helperText={errors.location}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Submit Your Car Information
        </Button>
      </Box>

      <ToastContainer />
    </Container>
  );
}

export default CarForm;
