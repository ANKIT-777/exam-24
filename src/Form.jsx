
import React, { useState } from 'react';

function Form({ handleSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      setError('Please enter a valid input.');
      return;
    }

    handleSubmit(inputValue);
    setInputValue('');
    setError('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="inputField">Input:</label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
