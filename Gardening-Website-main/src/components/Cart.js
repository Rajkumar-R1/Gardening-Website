import { useState, useEffect } from 'react';
import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const totalInEuros = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0);
  const exchangeRate = 85; // Exchange rate: 1 Euro = 85 Indian Rupees
  const totalInRupees = totalInEuros * exchangeRate;

  useEffect(() => {
    
  })

  return isOpen ? (
    <div className='lmj-cart'>
      <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>
        Close
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Cart</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}₹ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total: {totalInEuros}₹ ({totalInRupees}₹)</h3>
          <button onClick={() => updateCart([])}>Empty cart</button>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>
        Open Cart
      </button>
    </div>
  );
}

export default Cart;
