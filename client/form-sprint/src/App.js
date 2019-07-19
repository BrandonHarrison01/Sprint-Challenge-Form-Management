import React from 'react';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import ProtectedData from './components/ProtectedData';

function App() {
  return (
    <div className="App">
      <FormikLoginForm />
      <ProtectedData />
    </div>
  );
}

export default App;
