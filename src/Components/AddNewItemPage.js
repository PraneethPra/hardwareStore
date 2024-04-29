import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from "../firebase"; 

const AddNewItemPage = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [notification, setNotification] = useState('');

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const newItem = {
        name: itemName,
        quantity: quantity,
        price: price,
        description: description,
      };

      const productsCollection = firestore.collection('products');
      await productsCollection.doc(newItem.name).set(newItem);

      setNotification('Item added successfully');

      setTimeout(() => {
        setNotification('');
      }, 1500); // Hide notification after 1.5 seconds

      setItemName('');
      setQuantity('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error('Error adding item:', error);
      setNotification('Error adding item. Please try again.');
    }
  };

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
    justifyContent: 'center',
    color: 'black', // Changed text color to black
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to left
    justifyContent: 'center',
    gap: '10px', // Added gap between fields
    fontWeight: 'bold', // Set text bold
    fontSize: '23px', // Set font size to 23
  };

  const inputStyle = {
    borderRadius: '5px', // Add border radius
    padding: '8px', // Add padding
    width: '100%', // Set width to 100%
  };

  const buttonStyle = {
    marginTop: '10px', // Add top margin
    padding: '10px 30px', // Add padding
    borderRadius: '20px', // Make button ellipse shape
    border: 'none', // Remove border
    cursor: 'pointer',
    backgroundColor: '#4CAF50', // Set button background color to green
    color: 'white',
    fontWeight: 'bold', // Set text bold
    fontSize: '16px', // Set font size to 16
  };

  const linkStyle = {
    marginTop: '20px', // Add top margin
    color: '#002147', // Set color to dark blue
    fontStyle: 'italic', // Set font style to italic
    textDecoration: 'none', // Remove underline
  };

  return (
    <div style={backgroundStyle}>
      <h2>Add New Item</h2>
      {notification && <p>{notification}</p>}
      <form style={formStyle} onSubmit={handleAddItem}>
        <label>
          Item Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required style={inputStyle} />
        </label>
        <label>
          Available Quantity:
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required style={inputStyle} />
        </label>
        <label>
          Unit Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required style={inputStyle} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required style={inputStyle} />
        </label>
        <button type="submit" style={buttonStyle}>Add Item</button>
      </form>
      <Link to="/store" style={linkStyle}>Go back to Store</Link>
    </div>
  );
};

export default AddNewItemPage;
