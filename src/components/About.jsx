import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body1">
          At Scrap Car Canada, we are dedicated to providing fast and efficient car removal
          services. With over 20 years of experience in the industry, our team is ready to handle
          any scrap vehicle situation.
        </Typography>
        <Typography variant="body1">
          We started in 2000 with the goal of making car disposal easier for Canadians. Our mission
          is simple: offer the best prices for scrap cars while providing top-notch customer
          service.
        </Typography>
        <Typography variant="body1">
          Whether your car is old, damaged, or simply no longer roadworthy, we are here to help.
          Contact us today to get a free quote and schedule a tow.
        </Typography>
        <Typography variant="body1">
          We cover all major cities across Canada, ensuring a smooth and hassle-free process from
          start to finish.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
