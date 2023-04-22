
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="top-header">
        <h4>React Meals</h4>
        
      </div>
      <div className="header-container">
        <img
          className="background-image"
          src="https://images.unsplash.com/photo-1624021097939-d2e2cafa682e"
          alt="food"
        />
        <div className="text-overlay">
          <h1>Delicious Food</h1>
          <p>Experience a wide variety of dishes from different cuisines</p>
        </div>
      </div>
    </div>
  );
};

export default Header;



