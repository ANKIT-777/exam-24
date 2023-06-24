import React, { useState } from 'react';
import Header from './header';
import Form from './Form';
import Output from './Output';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');

  const handleFormSubmit = (inputValue) => {
    setUserInput(inputValue);
  };

  return (
    <div className="app">
      <Header />
      <Form handleSubmit={handleFormSubmit} />
      <Output userInput={userInput} />
    </div>
  );
}

export default App;
