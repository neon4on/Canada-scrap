import React from 'react';
import { Container, Typography } from '@mui/material';
import CarForm from './CarForm';
import HowToScrap from './HowToScrap';
import FAQ from './FAQ';
import CarSlider from './CarSlider';

function Main() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Scrap Car Canada
      </Typography>
      <Typography variant="body1" gutterBottom>
        Scrap Car Canada helps you get rid of your car quickly and for free. We offer an instant
        quote and send a tow truck to pick up your car promptly.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Fill out the form, and we will contact you to confirm the details.
      </Typography>

      {/* Слайдер с фотографиями */}
      <CarSlider />

      {/* Форма для заполнения данных */}
      <CarForm />

      {/* Секция HowToScrap с отступами */}
      <HowToScrap />

      {/* FAQ с увеличенными отступами */}
      <FAQ />
    </Container>
  );
}

export default Main;
