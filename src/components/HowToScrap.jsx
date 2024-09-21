import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function HowToScrap() {
  const steps = [
    {
      icon: <CallIcon />,
      title: 'Give Us a Call',
      description:
        'Our dedicated call center is ready to help you get a quote and make an informed decision.',
    },
    {
      icon: <RemoveShoppingCartIcon />,
      title: 'Receive a Quote',
      description:
        'After assessing your vehicle, we will provide you with a quote, usually valid for the current calendar month.',
    },
    {
      icon: <LocalShippingIcon />,
      title: 'Book a Free Tow',
      description:
        'We offer free towing to collect your car. You just need to book the service at your convenience.',
    },
    {
      icon: <EmojiPeopleIcon />,
      title: 'Prepare for Pick-Up',
      description:
        'Remove all belongings, and ensure you have the ownership documents and keys ready for pick-up.',
    },
  ];

  return (
    <Container sx={{ marginBottom: 8 }}>
      {' '}
      {/* Добавляем нижний отступ */}
      <Typography variant="h4" gutterBottom>
        How to Scrap Your Car
      </Typography>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                border: '1px solid #ccc',
                padding: 3,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
              }}>
              {step.icon}
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                {step.title}
              </Typography>
              <Typography sx={{ marginTop: 1 }}>{step.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HowToScrap;
