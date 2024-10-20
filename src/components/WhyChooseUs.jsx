import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

function WhyChooseUs() {
  return (
    <Container sx={{ backgroundColor: '#e0f7e4', paddingY: { xs: 4, md: 6 }, maxWidth: '1200px' }}>
      <Grid container spacing={2} alignItems="stretch"> 
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
              sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: 4 }}>
              Why Choose Us?
            </Typography>

            <Box mb={3}>
              <Typography variant="h6">Top Cash Payouts</Typography>
              <Typography variant="body1">
                We offer some of the best payouts for scrap cars in Toronto, ensuring you get a great deal.
              </Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="h6">Fast and Convenient</Typography>
              <Typography variant="body1">
                We make the process quick and easy. From instant quotes to same-day or next-day pickups, we work around your schedule.
              </Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="h6">Trusted by Thousands</Typography>
              <Typography variant="body1">
                With years of experience and thousands of satisfied customers, we are the go-to choice for scrap car buyers in Toronto. Join our growing list of happy clients who have sold their cars to us quickly and effortlessly.
              </Typography>
            </Box>

            <Box mb={3}>
              <Typography variant="h6">Professional Team</Typography>
              <Typography variant="body1">
                Our dedicated team of professionals is ready to help you through every step of the process, ensuring that selling your scrap car is as easy and stress-free as possible.
              </Typography>
            </Box>

          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/images/CanadaScrap3.jpg"
            alt="Why Choose Us"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }} 
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default WhyChooseUs;
