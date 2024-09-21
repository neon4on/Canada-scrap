import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import car1 from '../images/car1.jpg'; // Подключаем изображения
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';

function CarSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Скорость переключения
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Автоматическое переключение
    autoplaySpeed: 3000, // Интервал 3 секунды
  };

  const images = [car1, car2, car3];

  return (
    <Box sx={{ margin: '20px 0' }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Car ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default CarSlider;
