import React from 'react';
import './assets/App.css';
import Promo from './layouts/Promo';
import Contact from './layouts/Contact';
import Contact1 from './layouts/Contact_1';
import Select from './layouts/Select';
import Order from './layouts/Order';

const App = () => {
  return (
    <div className="App">
      <Promo/>
      <Contact/>
      <Contact1/>
      <Select/>
      <Order/>
    </div>
  );
};

export default App;
