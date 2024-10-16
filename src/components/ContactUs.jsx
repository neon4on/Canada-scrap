import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function ContactUs() {
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
        Contact Us
      </Typography>

      <Box>
        <Typography variant="body1">Phone: Contact us at +1-647-628-3037.</Typography>
        <Typography variant="body1">Email: Email us at canadascrapcars@gmail.com.</Typography>
        <Typography variant="body1">
          Location: We serve Toronto and surrounding areas, providing fast and reliable scrap car
          removal services.
        </Typography>
      </Box>
    </Container>
  );
}

export default ContactUs;
