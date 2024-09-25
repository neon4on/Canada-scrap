import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки данных формы
    console.log('Form submitted', formData);
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
        />
        <TextField
          label="Car Year"
          name="carYear"
          value={formData.carYear}
          onChange={handleChange}
          required
          type="number"
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
          type="tel"
        />
        <TextField
          label="Additional Details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          multiline
          rows={4}
        />
        {/* Изменяем кнопку на контрастный цвет (салатовый) */}
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
