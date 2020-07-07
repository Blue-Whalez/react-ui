import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="container">
      <Button text="hello" onClick={()=>{console.log('clickeds')}}></Button>
      <Button text="hello" size="lg"></Button>
      <Button text="hello" variant="outline"></Button>
      <Button text="hello" variant="text"></Button>
      <Button text="hello" disabled></Button>
      <Button text="hello" variant="text" disabled></Button>
      <Button text="hello" color="primary"></Button>
      <Button text="hello" color="secondary"></Button>
      <Button text="hello" color="danger" disabledShadow></Button>
      <Button text="hello" color="primary" startIcon="cart"></Button>
      <Button text="hello" color="primary"  endIcon="cart"></Button>
      <Input id="inputne" name="a" label="Nhập:" placeholder="Viết vô đây"></Input>
      <Input id="inputne" name="a" label="Nhập:" placeholder="Viết vô đây" size="sm"></Input>
      <Input name="a" label="Nhập:" helpText="Đây là help text"></Input>
      <Input name="a" label="Nhập:" placeholder="Viết vô đây" helpText="Đây là help text" multiline row="4"></Input>
      <Input name="a" label="Nhập:" placeholder="Viết vô đây" value="Value"></Input>
      <Input name="a" label="Nhập:" placeholder="Viết vô đây" helpText="đéo biết rê chuột vô đây nhập à?" error></Input>
      <Input name="a" label="Nhập:" placeholder="Viết vô đây" error disabled></Input>
    </div>
  );
}

export default App;
