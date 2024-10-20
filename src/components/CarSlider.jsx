import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Для плавной анимации

function CarSlider() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(128, 128, 128, 0.5)', // Полупрозрачный серый фон
        width: '100%',
        paddingY: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={{ x: ['100%', '-100%'] }} // Анимация слева направо
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }} // Постоянная анимация
        style={{ whiteSpace: 'nowrap' }} // Не переносить текст на новую строку
      >
        <Typography
          variant="h2"
          component="span"
          sx={{
            color: '#fff', // Белый текст
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
          }}
        >
          Cash{' '}
        </Typography>
        <Typography
          variant="h2"
          component="span"
          sx={{
            color: 'green', // Зелёный доллар
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
          }}
        >
          $
        </Typography>
        <Typography
          variant="h2"
          component="span"
          sx={{
            color: '#fff', // Белый текст
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
          }}
        >
          {' '}
          Cars
        </Typography>
      </motion.div>
    </Box>
  );
}

export default CarSlider;
