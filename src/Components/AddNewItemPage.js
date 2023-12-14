import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addItemToStore } from '../storeOperations'; // Import your Firestore-related function
//import { firebase, firestore, auth } from '../firebase'; // Import Firebase, Firestore, and Auth

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
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleAddItem}>
        <label>
          Item Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
        </label>
        <label>
          Available Quantity:
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </label>
        <label>
          Unit Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <Link to="/store">Go back to Store</Link>
    </div>
  );
};

export default AddNewItemPage;
