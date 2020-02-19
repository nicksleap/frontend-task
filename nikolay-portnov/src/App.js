import React from 'react';
import './assets/App.css';
import Promo from './layouts/Promo';
import Contact from './layouts/Contact';
import Select from './layouts/Select';
import Order from './layouts/Order';

const App = () => {
  return (
    <div className="App">
      <Promo/>
      <Contact/>
      <Select/>
      <Order/>
    </div>
  );
};

export default App;
