import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/form">Заполнить анкету</Link>
    </nav>
  );
}

export default Navigation;
