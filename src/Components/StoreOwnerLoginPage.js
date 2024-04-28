import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the auth instance from firebase.js

const StoreOwnerLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url('https://cdn4.vectorstock.com/i/1000x1000/27/83/a-hardware-store-vector-1122783.jpg')`,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: '0.9',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#008000',
    color: 'white',
    cursor: 'pointer',
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/store'); // Redirect to the store page after successful login
    } catch (error) {
      setError(true);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div style={backgroundStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2>Store Owner Login</h2>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={buttonStyle} type="submit">
          Login
        </button>
        {error && <p style={{ color: 'red' }}>Incorrect email or password. Please try again.</p>}
        <div>
          <Link to="/store-owner-login">Try Again</Link>
          <span> | </span>
          {/* Placeholder for forgot password */}
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </form>
    </div>
  );
};

export default StoreOwnerLoginPage;
