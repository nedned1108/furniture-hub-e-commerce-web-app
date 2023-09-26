import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation/>
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
    </>
  );
}

export default App;
