import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addItemToStore } from '../storeOperations'; // Import your Firestore-related function

const backgroundStyle = {
  backgroundImage: 'linear-gradient(to bottom right, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)',
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Center vertically
  color: '#FFFFFF', // White text color
  fontFamily: 'Algerian', // Algerian font
};

const formContainerStyle = {
  width: '50%', // Adjust as needed
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
};

const descriptionStyle = {
  height: '6rem', // Double the size of the textarea
};

const linkStyle = {
  color: '#0000FF', // Blue color
  marginTop: '1rem', // Add some spacing
  textDecoration: 'none', // Remove underline
};

const buttonStyle = {
  backgroundColor: '#00FF00', // Green color
  color: '#FFFFFF', // White text color
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const AddNewItemPage = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      // Logic to handle adding a new item to the store
      const newItem = {
        itemName,
        availableQuantity: quantity,
        unitPrice: price,
        description,
      };

      // Use the Firestore function to add the new item
      const success = await addItemToStore(newItem);

      if (success) {
        console.log('New item added:', newItem);
        // Redirect the user back to the store page after adding the item
        // This assumes '/store' is the route for the StorePage component
        // You can use useHistory hook from react-router-dom for redirection
      } else {
        console.error('Failed to add item');
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };
  

  return (
    <div style={backgroundStyle}>
      <div style={formContainerStyle}>
        <h2>Add New Item</h2>
        <form onSubmit={handleAddItem}>
          <div style={fieldStyle}>
            <label>Item Name:</label>
            <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
          </div>
          <div style={fieldStyle}>
            <label>Available Quantity:</label>
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </div>
          <div style={fieldStyle}>
            <label>Unit Price:</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div style={fieldStyle}>
            <label>Description:</label>
            <textarea style={descriptionStyle} value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <button type="submit" style={buttonStyle}>Add Item</button>
        </form>
        <Link style={linkStyle} to="/store">Go back to Store</Link>
      </div>
    </div>
  );
};

export default AddNewItemPage;
