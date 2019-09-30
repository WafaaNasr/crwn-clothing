import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homePage';
import HatsPage from './pages/hatsPage';

function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
