import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

function Services() {
  return (
    <Container sx={{ backgroundColor: 'white', paddingY: { xs: 4, md: 6 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src="/images/CanadaScrap2.jpg" alt="Services" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: { xs: 2, md: 4 } }}>
            Our Services
          </Typography>

          <Box mb={3}>
            <Typography variant="h6">Scrap and Used Car Purchases</Typography>
            <Typography variant="body1">
              We buy cars that are either at the end of their life or simply no longer needed, even if
              they’re still running. We handle everything from paperwork to towing.
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h6">Instant Cash Offers</Typography>
            <Typography variant="body1">
              Our offers are quick and fair. In just a few minutes, you’ll receive an estimate for your
              scrap vehicle, and payment is made immediately upon pickup.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
