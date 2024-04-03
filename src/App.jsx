import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ paddingBottom: '100px' }}> {/* Adding space at the bottom for the footer */}
      <Header />
      <Box sx={{ marginTop: '20px' }}> {/* Adding space below the header */}
        <Container maxWidth="lg">
          <ProductList />
        </Container>
      </Box>
      <Footer sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} /> {/* Fixing the footer to the bottom */}
    </Box>
  );
}


export default App;
