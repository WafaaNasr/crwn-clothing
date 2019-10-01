import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import Header from "./components/header/header.component";

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;


