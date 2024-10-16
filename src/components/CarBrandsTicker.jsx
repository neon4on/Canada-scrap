import React from 'react';
import { Box } from '@mui/material';

function CarBrandsTicker() {
  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: '#f5f5f5', padding: 2 }}>
      <Box
        component="div"
        sx={{
          display: 'flex', // Используем flex для горизонтального расположения элементов
          animation: 'ticker 20s linear infinite', // Бесконечная анимация
          width: 'fit-content', // Делаем ширину под содержимое
        }}
      >
        <img src="/images/brands/bmw.svg" alt="BMW" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/chevrolet.svg" alt="Chevrolet" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/ford.svg" alt="Ford" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/honda.svg" alt="Honda" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/nissan.svg" alt="Nissan" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/volkswagen.svg" alt="Volkswagen" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/subaru.svg" alt="Subaru" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/skoda.svg" alt="Skoda" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/opel.svg" alt="Opel" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/gmc.svg" alt="GMC" style={{ width: 100, marginRight: 40 }} />

        {/* Клонируем все элементы для бесшовного эффекта */}
        <img src="/images/brands/bmw.svg" alt="BMW" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/chevrolet.svg" alt="Chevrolet" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/ford.svg" alt="Ford" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/honda.svg" alt="Honda" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/nissan.svg" alt="Nissan" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/volkswagen.svg" alt="Volkswagen" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/subaru.svg" alt="Subaru" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/skoda.svg" alt="Skoda" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/opel.svg" alt="Opel" style={{ width: 100, marginRight: 40 }} />
        <img src="/images/brands/gmc.svg" alt="GMC" style={{ width: 100, marginRight: 40 }} />
      </Box>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0); /* Старт с начала ленты */
          }
          100% {
            transform: translateX(-50%); /* Лента смещается на половину своей ширины */
          }
        }
      `}</style>
    </Box>
  );
}

export default CarBrandsTicker;
