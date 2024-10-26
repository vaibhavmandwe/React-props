import React from 'react';

function Cart({ cart, removeFromCart, updateQuantity }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((shoe) => (
            <li key={shoe.id} className="cart-item">
              <img src={shoe.image} alt={shoe.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{shoe.name}</p>
                <p className="cart-item-price">${shoe.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(shoe, -1)}>-</button>
                  <span>{shoe.quantity}</span>
                  <button onClick={() => updateQuantity(shoe, 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(shoe.id)} className="cart-item-remove">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
