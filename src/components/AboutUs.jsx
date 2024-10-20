import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

function AboutUs() {
  return (
    <Container sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 }, maxWidth: '1200px' }}>
      <Grid container spacing={2} sx={{ height: '1024px' }}>
        <Grid item xs={12} md={6}>
          {/* Картинка занимает всю высоту блока */}
          <img
            src="/images/CanadaScrap1.jpg"
            alt="Scrap Car"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Картинка полностью заполняет блок
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Заголовок и текст будут равномерно распределены по высоте */}
          <Box>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: 2 }}>
              Your Trusted Scrap Car Buyer in Toronto
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              We understand how frustrating it can be to deal with potential buyers who aren’t serious
              about your car. At Canada Scrap Cars, we offer a simple, stress-free alternative. Whether
              your vehicle is old, damaged, or simply no longer roadworthy, we specialize in buying scrap
              cars in Toronto and surrounding areas.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Forget about long phone calls and endless emails—we’ll get you the best cash offer by
              collecting relevant information about your vehicle. With years of experience, we’re committed
              to providing top-notch customer service and hassle-free transactions.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
