import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function HowItWorks() {
  return (
    <Container
      sx={{
        backgroundColor: '#e0f7e4',
        paddingY: { xs: 4, md: 6 },
        textAlign: { xs: 'center', md: 'left' },
      }}>
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, marginBottom: { xs: 2, md: 4 } }}>
        How to Sell Your Scrap Car
      </Typography>

      <Box mb={3}>
        <Typography variant="h6">Step 1: Get a Quote</Typography>
        <Typography variant="body1">
          Call or fill out our online form to get an instant quote for your car based on its
          condition, make, model, and year. We pride ourselves on offering a fast, obligation-free
          estimate.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6">Step 2: Schedule Pickup</Typography>
        <Typography variant="body1">
          Once you accept the offer, we will arrange a convenient time to pick up your vehicle. You
          choose the date and time, and we’ll be there to collect your car. We offer free towing
          services.
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="h6">Step 3: Get Paid</Typography>
        <Typography variant="body1">
          On the spot, we’ll pay you cash when we collect your vehicle. Our team will do a quick
          inspection to verify the information and check your vehicle documents before we take it
          away.
        </Typography>
      </Box>
    </Container>
  );
}

export default HowItWorks;