import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

function WhyChooseUs() {
  return (
    <Container sx={{ backgroundColor: '#e0f7e4', paddingY: { xs: 4, md: 6 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: { xs: 2, md: 4 } }}>
            Why Choose Us?
          </Typography>

          <Box mb={3}>
            <Typography variant="h6">Top Cash Payouts</Typography>
            <Typography variant="body1">
              We offer some of the best payouts for scrap cars in Toronto, ensuring you get a great
              deal.
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h6">Fast and Convenient</Typography>
            <Typography variant="body1">
              We make the process quick and easy. From instant quotes to same-day or next-day pickups,
              we work around your schedule.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/assets/images/CanadaScrap3.jpg" alt="Why Choose Us" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default WhyChooseUs;
