import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import StoreOwnerLoginPage from './Components/StoreOwnerLoginPage';
import StoreOwnerSignupPage from './Components/StoreOwnerSignupPage';
import AddNewItemPage from './Components/AddNewItemPage';
import StorePage from './Components/StorePage';
import { auth } from './firebase'; // Import the auth instance from firebase.js

const App = () => {
  // You might want to use Firebase Auth for authentication handling
  // For example, to check if a user is logged in or not
  const checkUserLoggedIn = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log('User is logged in:', user);
        // Perform actions for a logged-in user if needed
      } else {
        // User is signed out
        console.log('User is logged out');
        // Perform actions for a logged-out user if needed
      }
    });
  };

  // Call the function to check user login status when the app loads
  React.useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/store-owner-login" element={<StoreOwnerLoginPage />} />
        <Route path="/store-owner-signup" element={<StoreOwnerSignupPage />} />
        <Route path="/add-new-item" element={<AddNewItemPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
};

export default App;
