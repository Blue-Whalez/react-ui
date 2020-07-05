import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="container">
      <Button text="hello" size="sm"></Button>
      <Button text="hello"></Button>
      <Button text="hello" size="lg"></Button>
      <Button text="hello" variant="outline"></Button>
      <Button text="hello" variant="text"></Button>
      <Button text="hello" disabled></Button>
      <Button text="hello" variant="text" disabled></Button>
      <Button text="hello" color="primary"></Button>
      <Button text="hello" color="secondary"></Button>
      <Button text="hello" color="danger" disabledShadow></Button>
    </div>
  );
}

export default App;
