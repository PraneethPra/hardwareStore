import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
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
  };

  const textStyle = {
    textAlign: 'center',
    color: '#002147',
    textShadow: '2px 2px 4px rgba(0, 128, 0, 0.5)',
    marginBottom: '20px',
  };

  const authButtonStyle = {
    display: 'flex',
    gap: '10px',
  };

  const loginButtonStyle = {
    backgroundColor: '#FFD700',
    color: '#002147',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px rgba(0, 128, 0, 0.5)',
  };

  const signUpButtonStyle = {
    backgroundColor: '#008000',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px rgba(0, 128, 0, 0.5)',
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={textStyle}>Welcome to the Hardware Store App</h1>
      <p style={{ color: 'white', backgroundColor: '#002147', padding: '2px 4px', borderRadius: '4px' }}>
        Find all your hardware needs here!
      </p>
      <div style={authButtonStyle}>
        <Link to="/store-owner-login"> {/* Link to navigate to StoreOwnerLoginPage */}
          <button style={loginButtonStyle}>
            Login
          </button>
        </Link>
        <Link to="/store-owner-signup"> {/* Link to sign up page */}
          <button style={signUpButtonStyle}>
            Sign Up
          </button>
        </Link>
      </div>
      {/* Other content and components */}
    </div>
  );
};

export default HomePage;
