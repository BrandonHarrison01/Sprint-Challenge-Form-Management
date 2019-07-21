import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import FormikLoginForm from './components/LoginForm';
import ProtectedData from './components/ProtectedData';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={FormikLoginForm} />
      <Route path='/meals' component={ProtectedData} />
    </div>
  );
}

export default App;
