import React, { useState } from 'react';

const AddItemModal = ({ onClose, onSubmit }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ itemName, quantity, price, description });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};

export default AddItemModal;
