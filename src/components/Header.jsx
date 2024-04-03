import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <AppBar position="fixed" sx={{ top: 0, backgroundColor: '#4CAF50' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>🤤</span>
          <span style={{ fontFamily: 'cursive', fontWeight: 'bold', textDecoration: 'none', color: '#fff' }}>FoodKart</span>
        </Typography>
        <div>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
