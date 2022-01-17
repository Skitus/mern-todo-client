import React from 'react';
import { Container } from '@mui/material';
import Routers from './Routes';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Routers />
    </Container>
  );
}

export default App;
