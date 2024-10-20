import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

function Services() {
  return (
    <Container sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 }, maxWidth: '1200px' }}>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <img
            src="/images/CanadaScrap2.jpg"
            alt="Services"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingY: { xs: 2, md: 4 },
            }}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: 2 }}>
              Our Services
            </Typography>

            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              We buy cars that are either at the end of their life or simply no longer needed,
              even if they’re still running. We handle everything from paperwork to towing.
            </Typography>

            <Typography variant="body1" sx={{ flexGrow: 1, marginBottom: 2 }}>
              Our offers are quick and fair. In just a few minutes, you’ll receive an estimate
              for your scrap vehicle, and payment is made immediately upon pickup.
            </Typography>

            <Typography variant="body1" sx={{ flexGrow: 1, marginBottom: 2 }}>
              Whether your car is an old beater or has simply become too expensive to repair, 
              we make it easy for you to sell your vehicle without any hassle. Just call us or fill out 
              our form online, and we’ll handle the rest.
            </Typography>

            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              In addition to offering top cash payouts, we are committed to eco-friendly car disposal. 
              We ensure that your car is responsibly recycled and that no reusable parts go to waste.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
