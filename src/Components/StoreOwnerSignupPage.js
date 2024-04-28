import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the auth instance from firebase.js

const StoreOwnerSignupPage = () => {
  const [ownerName, setOwnerName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.trim() !== retypePassword.trim()) {
      setError(true);
      setPassword('');
      setRetypePassword('');
    } else {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        navigate('/store-owner-login');
      } catch (error) {
        setError(true);
        setEmail('');
        setPassword('');
        setRetypePassword('');
        console.error('Error signing up:', error);
      }
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#002147',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    margin: '10px',
    padding: '10px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  };

  const buttonStyle = {
    margin: '10px',
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
      <h2>Store Owner Signup</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Owner Name:
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label>
          Store Name:
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <label>
          Retype Password:
          <input
            type="password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            style={inputStyle}
            required
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>Passwords do not match. Please try again.</p>}
      <div>
        <Link to="/store-owner-login">Back to Login</Link>
      </div>
    </div>
  );
};

export default StoreOwnerSignupPage;
