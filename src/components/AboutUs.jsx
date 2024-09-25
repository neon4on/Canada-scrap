import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function AboutUs() {
  return (
    <Container
      sx={{
        backgroundColor: 'white',
        paddingY: { xs: 4, md: 6 },
        textAlign: { xs: 'center', md: 'left' },
      }}>
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: { xs: 2, md: 4 } }}>
        Your Trusted Scrap Car Buyer in Toronto
      </Typography>
      <Box>
        <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
          We understand how frustrating it can be to deal with potential buyers who aren’t serious
          about your car. At [Your Company Name], we offer a simple, stress-free alternative.
          Whether your vehicle is old, damaged, or simply no longer roadworthy, we specialize in
          buying scrap cars in Toronto and surrounding areas. Forget about long phone calls and
          endless emails—we’ll get you the best cash offer by collecting relevant information about
          your vehicle. With years of experience, we’re committed to providing top-notch customer
          service and hassle-free transactions.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutUs;
