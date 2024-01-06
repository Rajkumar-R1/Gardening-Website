import { useState } from 'react';
import '../styles/Footer.css';

// Function to create a footer component
function Footer() {
  // State variable to manage email input
  const [inputValue, setInputValue] = useState('');

  // Handle input changes
  function handleInput(e) {
    setInputValue(e.target.value);
  }

  // Validate email input on blur
  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert('Warning: There is no "@", this is not a valid email address ');
    }
  }

  // Render the footer content
  return (
    <footer className='lmj-footer'>
      <div className='lmj-footer-elem'>
        For plant enthusiasts 
      </div>
      <div className='lmj-footer-elem'>Leave us your email:</div>
      <input
        placeholder='Enter your email'
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
