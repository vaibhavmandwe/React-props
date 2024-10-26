import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
