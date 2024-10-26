import React from 'react';

function Shoe({ shoe, addToCart }) {
  return (
    <div className="shoe-item" onClick={() => addToCart(shoe)}>
      <img src={shoe.image} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <p>Price: ${shoe.price}</p>
      <p>Color: {shoe.color}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Shoe;
