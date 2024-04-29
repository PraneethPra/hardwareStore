import React, { useState } from 'react';

const UpdateModal = ({ item, onUpdate, onClose }) => {
  const [updatedItem, setUpdatedItem] = useState({ ...item });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedItem);
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>&times;</span>
        <h2 style={headerStyle}>Update Item</h2>
        <div style={formContainerStyle}>
          <div style={columnStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
              <label>
                Name:
                <input type="text" name="name" value={updatedItem.name} onChange={handleChange} style={inputStyle} />
              </label>
              <label>
                Quantity:
                <input type="text" name="quantity" value={updatedItem.quantity} onChange={handleChange} style={inputStyle} />
              </label>
            </form>
          </div>
          <div style={columnStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
              <label>
                Price:
                <input type="text" name="price" value={updatedItem.price} onChange={handleChange} style={inputStyle} />
              </label>
              <label>
                Description:
                <textarea name="description" value={updatedItem.description} onChange={handleChange} style={inputStyle} />
              </label>
              <button type="submit" style={submitButtonStyle}>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  zIndex: '1',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '50%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.4)',
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const closeButtonStyle = {
  color: 'red',
  fontSize: '28px',
  fontWeight: 'bold',
  cursor: 'pointer',
  position: 'absolute',
  top: '10px',
  right: '10px',
};

const headerStyle = {
  textAlign: 'center',
  color: 'blue',
  marginBottom: '20px',
};

const formContainerStyle = {
  display: 'flex',
};

const columnStyle = {
  flex: '1',
  padding: '10px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const submitButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default UpdateModal;
