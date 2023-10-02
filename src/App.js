import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import ReceiptPage from './components/ReceiptPage';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/receipt" exact>
          <ReceiptPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
