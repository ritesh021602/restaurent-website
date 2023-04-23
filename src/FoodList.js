import React from 'react';

const FoodList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Burger</h3>
            <div>
              <h3>$10</h3>
              <div>
                <label htmlFor="item1">Amount:</label>
                <input type="number" id="item1" name="item1" min="1" max="10" style={{marginLeft: '5px'}} />
              </div>
              <button>Add to cart</button>
            </div>
          </div>
        </li>
        <li style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Pizza</h3>
            <div>
              <h3>$12</h3>
              <div>
                <label htmlFor="item2">Amount:</label>
                <input type="number" id="item2" name="item2" min="1" max="10" style={{marginLeft: '5px'}} />
              </div>
              <button>Add to cart</button>
            </div>
          </div>
        </li>
        <li style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Sandwich</h3>
            <div>
              <h3>$15</h3>
              <div>
                <label htmlFor="item3">Amount:</label>
                <input type="number" id="item3" name="item3" min="1" max="10" style={{marginLeft: '5px'}} />
              </div>
              <button>Add to cart</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FoodList;
