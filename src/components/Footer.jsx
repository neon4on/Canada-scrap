import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#333', color: '#fff', padding: 2 }}>
      <Container>
        <Typography variant="body1" align="center">
          &copy; 2024 Scrap Car Canada. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
