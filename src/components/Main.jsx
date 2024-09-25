import React from 'react';
import { Container } from '@mui/material';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import CarSlider from './CarSlider';
import CarForm from './CarForm';

function Main() {
  return (
    <>
      {/* Секция About Us с якорем */}
      <Container id="about" sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 } }}>
        <AboutUs />
      </Container>

      {/* Секция How It Works с якорем */}
      <Container id="how-it-works" sx={{ backgroundColor: '#e0f7e4', paddingY: { xs: 4, md: 6 } }}>
        <HowItWorks />
      </Container>

      {/* Форма с якорем */}
      <Container id="offer" sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 } }}>
        <CarForm />
      </Container>

      {/* Секция Services с якорем */}
      <Container id="services" sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 } }}>
        <Services />
      </Container>

      {/* Секция Why Choose Us с якорем */}
      <Container id="why-choose-us" sx={{ backgroundColor: '#e0f7e4', paddingY: { xs: 4, md: 6 } }}>
        <WhyChooseUs />
      </Container>

      {/* Секция FAQ с якорем */}
      <Container id="faq" sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 } }}>
        <FAQ />
      </Container>

      {/* Секция Contact Us с якорем */}
      <Container id="contact" sx={{ backgroundColor: '#e0f7e4', paddingY: { xs: 4, md: 6 } }}>
        <ContactUs />
      </Container>
    </>
  );
}

export default Main;
