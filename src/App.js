import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
