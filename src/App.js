import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
