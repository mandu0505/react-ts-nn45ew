import * as React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Button />
    </div>
  );
}
