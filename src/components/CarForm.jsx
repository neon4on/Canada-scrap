import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function CarForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    carYear: '',
    carModel: '',
    city: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit', formData);
      alert('Your information has been successfully submitted!');
      setFormData({
        fullName: '',
        carYear: '',
        carModel: '',
        city: '',
        email: '',
        phone: '',
        details: '',
      });
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Submit Your Car Information
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
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
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default CarForm;
