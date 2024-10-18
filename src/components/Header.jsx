import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CarIcon from '@mui/icons-material/DirectionsCar';

function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'About Us', href: '#about' },
    { text: 'How It Works', href: '#how-it-works' },
    { text: 'Services', href: '#services' },
    { text: 'FAQ', href: '#faq' },
    { text: 'Contact Us', href: '#contact' },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component="a" href={item.href}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333', paddingY: { xs: 1, md: 2 } }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Логотип с машиной */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CarIcon sx={{ marginRight: 1 }} />
          <Typography variant="h6" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Scrap Car Canada
          </Typography>
        </Box>

        {/* Якорные ссылки для десктопа */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}>
              {item.text}
            </Link>
          ))}
        </Box>

        {/* Бургер для мобильных устройств */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>

        {/* Drawer для мобильного меню */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
