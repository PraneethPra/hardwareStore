import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllItems } from '../storeOperations'; // Import your Firestore-related function

const StorePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the database when the component mounts
    const fetchItems = async () => {
      try {
        const itemsData = await getAllItems();
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const backgroundStyle = {
    backgroundImage: 'linear-gradient(to bottom right, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)',
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Center vertically
  color: '#FFFFFF', // White text color
  fontFamily: 'Algerian', //
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
    textDecoration: 'none', // Remove underline from link
  };

  return (
    <div style={backgroundStyle}>
      <h2>Store Page - Published Items</h2>
      <Link to="/add-new-item" style={addButtonStyle}>Add New Item</Link>
      <div>
        {items.map((item) => (
          <div key={item.id} style={itemStyle}>
            <h3>{item.itemName}</h3>
            <p>Available Quantity: {item.availableQuantity}</p>
            <p>Unit Price: {item.unitPrice}</p>
            <p>Description: {item.description}</p>
            {/* Add onClick handlers for delete and update */}
            <button>Delete</button>
            <button>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
