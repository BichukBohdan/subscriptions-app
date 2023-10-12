import React from 'react';
import {
  HomePage,
} from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import DashboardComponent from './components/DashboardComponent';

const App = () => {
  const {
    isLogged,
  } = useStateContext();

  return (
    isLogged ? (
      <DashboardComponent />
    ) : (
      <HomePage />
    )
  );
};

export default App;
