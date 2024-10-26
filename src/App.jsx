import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Shoe from './components/Shoe';
import Cart from './components/Cart';
import './App.css';

// Import local shoe images
import nikeAirMax from './assets/nike-air-max.jpeg';
import adidasUltraBoost from './assets/adidas-ultraboost.jpeg';
import pumaRsX from './assets/puma-rs-x.jpeg';
import reebokZig from './assets/reebok-zig.jpeg';
import vansOldSkool from './assets/vans-old-skool.jpeg';
import converseAllStar from './assets/converse-all-star.jpeg';
import newBalance574 from './assets/new-balance-574.jpeg';
import jordan1 from './assets/jordan-1.jpeg';
import asicsGelLyte from './assets/asics-gel-lyte.jpeg';
import underArmourHovr from './assets/under-armour-hovr.jpeg';

// Shoe data with the imported images
const shoesData = [
  { id: 1, name: 'Nike Air Max', price: 120, color: 'Red', image: nikeAirMax },
  { id: 2, name: 'Adidas UltraBoost', price: 150, color: 'Blue', image: adidasUltraBoost },
  { id: 3, name: 'Puma RS-X', price: 100, color: 'White', image: pumaRsX },
  { id: 4, name: 'Reebok Zig', price: 110, color: 'Black', image: reebokZig },
  { id: 5, name: 'Vans Old Skool', price: 80, color: 'Green', image: vansOldSkool },
  { id: 6, name: 'Converse All Star', price: 90, color: 'Yellow', image: converseAllStar },
  { id: 7, name: 'New Balance 574', price: 130, color: 'Pink', image: newBalance574 },
  { id: 8, name: 'Jordan 1', price: 200, color: 'Orange', image: jordan1 },
  { id: 9, name: 'Asics Gel-Lyte', price: 140, color: 'Purple', image: asicsGelLyte },
  { id: 10, name: 'Under Armour HOVR', price: 160, color: 'Grey', image: underArmourHovr },
];

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === shoe.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  // Update quantity function
  const updateQuantity = (shoe, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === shoe.id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Remove item from cart function
  const removeFromCart = (id) => {
    setCart(cart.filter((shoe) => shoe.id !== id));
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <div className="shoe-list">
          <h1>Shoes</h1>
          <div className="shoes">
            {shoesData.map((shoe) => (
              <Shoe key={shoe.id} shoe={shoe} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}

export default App;
