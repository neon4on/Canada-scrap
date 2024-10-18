import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

function AboutUs() {
  return (
    <Container sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 } }}>
      <Grid container spacing={2} alignItems="stretch"> {/* Добавляем alignItems="stretch" */}
        <Grid item xs={12} md={6}>
          <img
            src="/images/CanadaScrap1.jpg"
            alt="Scrap Car"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingY: { xs: 2, md: 4 } }}>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: 2 }}>
              Your Trusted Scrap Car Buyer in Toronto
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, flexGrow: 1 }}>
              We understand how frustrating it can be to deal with potential buyers who aren’t serious
              about your car. At Canada Scrap Cars, we offer a simple, stress-free alternative.
              Whether your vehicle is old, damaged, or simply no longer roadworthy, we specialize in
              buying scrap cars in Toronto and surrounding areas. Forget about long phone calls and
              endless emails—we’ll get you the best cash offer by collecting relevant information about
              your vehicle. With years of experience, we’re committed to providing top-notch customer
              service and hassle-free transactions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
