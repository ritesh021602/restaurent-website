import React from 'react';
import './FoodList.css';

const FoodList = () => {
  const foodItems = [
    { id: 1, name: 'Burger', price: 10 },
    { id: 2, name: 'Pizza', price: 12 },
    { id: 3, name: 'Taco', price: 6 },
    { id: 4, name: 'Salad', price: 8 },
  ];

  return (
    <div className="food-list">
      <h3>Our Menu</h3>
      <ul>
        {foodItems.map((food) => (
          <li key={food.id}>
            <div className="food-item">
              <div className="food-details">
                <h4>{food.name}</h4>
                <p>{`$${food.price}`}</p>
              </div>
              <button>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
