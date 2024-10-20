import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Для плавной анимации

function CarSlider() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(128, 128, 128, 0.5)', // Полупрозрачный серый фон
        width: '100%',
        paddingY: 1, // Уменьшаем высоту блока
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        animate={{ x: ['100%', '-100%'] }} // Анимация слева направо
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }} // Постоянная анимация
        style={{ whiteSpace: 'nowrap', display: 'flex', gap: '50px' }} // Добавляем разрыв между повторениями
      >
        {/* Повторяем несколько блоков текста "Cash $ Cars" с разрывом */}
        {[...Array(5)].map((_, index) => (
          <Box key={index} sx={{ display: 'inline-flex' }}>
            <Typography
              variant="h4" // Уменьшаем текст
              component="span"
              sx={{
                color: '#fff', // Белый текст
                fontSize: { xs: '1.5rem', md: '2rem' }, // Уменьшенные размеры шрифта
                fontWeight: 'bold',
              }}
            >
              Cash{' '}
            </Typography>
            <Typography
              variant="h4"
              component="span"
              sx={{
                color: 'green', // Зелёный доллар
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 'bold',
              }}
            >
              $
            </Typography>
            <Typography
              variant="h4"
              component="span"
              sx={{
                color: '#fff', // Белый текст
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 'bold',
              }}
            >
              {' '}
              Cars
            </Typography>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}

export default CarSlider;
