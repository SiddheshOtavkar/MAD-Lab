import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: 'center', flexDirection: 'column', paddingY: '8px' }}> {/* Added paddingY */}
        <Typography variant="body2" color="inherit">© 2024 My Ecommerce. All rights reserved.</Typography> {/* Changed variant to body2 */}
        <Typography variant="body2" color="inherit" sx={{ marginTop: '4px' }}> {/* Added marginTop */}
          <a href="/" style={{ textDecoration: 'none', color: 'white', margin: '0 10px', position: 'relative' }}>
            <span>Home</span>
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: 2, backgroundColor: 'white', opacity: 0, transition: 'opacity 0.3s' }}></span>
          </a>
          |
          <a href="/contact" style={{ textDecoration: 'none', color: 'white', margin: '0 10px', position: 'relative' }}>
            <span>Contact</span>
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: 2, backgroundColor: 'white', opacity: 0, transition: 'opacity 0.3s' }}></span>
          </a>
          |
          <a href="/about" style={{ textDecoration: 'none', color: 'white', margin: '0 10px', position: 'relative' }}>
            <span>About</span>
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: -2, height: 2, backgroundColor: 'white', opacity: 0, transition: 'opacity 0.3s' }}></span>
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
