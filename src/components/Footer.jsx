import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#333', paddingY: { xs: 2, md: 3 }, color: 'white' }}>
      <Container sx={{ textAlign: 'center' }}>
        {/* Якорные ссылки в футере */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            marginBottom: 2,
            flexWrap: 'wrap',
          }}>
          <Link
            href="#about"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
            }}>
            About Us
          </Link>
          <Link
            href="#how-it-works"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
            }}>
            How It Works
          </Link>
          <Link
            href="#services"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
            }}>
            Services
          </Link>
          <Link
            href="#faq"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
            }}>
            FAQ
          </Link>
          <Link
            href="#contact"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
            }}>
            Contact Us
          </Link>
        </Box>
        <Typography variant="body2">© 2024 Scrap Car Canada. All Rights Reserved.</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
