import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import firebase from '../firebase'; // Check the correct relative path to firebase.js
import { getAllItems } from '../storeOperations'; // Check the correct relative path to storeOperations.js
import { firebase, firestore, auth } from '../firebase'; // Import Firebase, Firestore, and Auth



const StorePage = () => {
  // Sample items data
  const [items, setItems] = useState([
    { id: 1, itemName: 'Item 1', availableQuantity: 10, unitPrice: 5, description: 'Description of Item 1' },
    { id: 2, itemName: 'Item 2', availableQuantity: 15, unitPrice: 8, description: 'Description of Item 2' },
    // Add more sample items as needed
  ]);

  const backgroundStyle = {
    backgroundImage: `url('https://cdn4.vectorstock.com/i/1000x1000/27/83/a-hardware-store-vector-1122783.jpg')`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#002147',
  };

  const itemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '60%',
    textAlign: 'left',
  };

  const addButtonStyle = {
    margin: '20px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px rgba(0, 128, 0, 0.5)',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={backgroundStyle}>
      <h2>Store Page - Published Items</h2>
      <button style={addButtonStyle}><Link to="/add-new-item" style={{ color: 'white', textDecoration: 'none' }}>Add New Item</Link></button>
      <div>
        {items.map((item) => (
          <div key={item.id} style={itemStyle}>
            <h3>{item.itemName}</h3>
            <p>Available Quantity: {item.availableQuantity}</p>
            <p>Unit Price: {item.unitPrice}</p>
            <p>Description: {item.description}</p>
            <button /* Add onClick handler for delete */>Delete</button>
            <button /* Add onClick handler for update */>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
