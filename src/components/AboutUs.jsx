import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

function AboutUs() {
  return (
    <Container sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 }, maxWidth: '1200px' }}>
      <Grid container spacing={2} sx={{ height: 'auto' }}> {/* Контейнер с минимальной высотой */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Картинка сохраняет пропорции */}
          <img
            src="/images/CanadaScrap1.jpg"
            alt="Scrap Car"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }} // Сохраняем пропорции изображения
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Текст, выровненный по высоте изображения */}
          <Box>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: 2 }}>
              Your Trusted Scrap Car Buyer in Toronto
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, marginBottom: 2 }}>
              We understand how frustrating it can be to deal with potential buyers who aren’t serious
              about your car. At Canada Scrap Cars, we offer a simple, stress-free alternative.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, marginBottom: 2 }}>
              Our process is simple, straightforward, and designed with your convenience in mind. We take
              care of everything—from initial consultation to final payment—so you don’t have to worry
              about a thing. Plus, our customer service is always available to help you with any questions
              or concerns.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Whether you're looking to sell an old car that's just taking up space, or you're in need of
              quick cash for a vehicle that no longer runs, we have the resources to ensure you get the best
              value. Trust us to make the process of selling your scrap car as smooth and hassle-free as
              possible.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
