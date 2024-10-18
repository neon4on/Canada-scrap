import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

function AboutUs() {
  return (
    <Container
      sx={{
        backgroundColor: 'white',
        paddingY: { xs: 4, md: 6 },
      }}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <img src="/images/CanadaScrap1.jpg" alt="Scrap Car"     style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
      </Grid>
        <Grid item xs={12} md={6}>
          {/* Текст справа */}
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, marginBottom: { xs: 2, md: 4 } }}>
            Your Trusted Scrap Car Buyer in Toronto
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
          We understand how frustrating it can be to deal with potential buyers who aren’t serious
          about your car. At Canada Scrap Cars, we offer a simple, stress-free alternative.
          Whether your vehicle is old, damaged, or simply no longer roadworthy, we specialize in
          buying scrap cars in Toronto and surrounding areas. Forget about long phone calls and
          endless emails—we’ll get you the best cash offer by collecting relevant information about
          your vehicle. With years of experience, we’re committed to providing top-notch customer
          service and hassle-free transactions.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
