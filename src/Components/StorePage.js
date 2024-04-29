import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, firestore } from "../firebase"; // Import Firestore and auth
import UpdateModal from "./UpdateModal"; // Import the UpdateModal component

const StorePage = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Display 6 items per page
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch items from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsCollection = firestore.collection("products");
        const querySnapshot = await productsCollection.get();
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setItems(data);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };
    fetchData();
  }, []);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sign out function
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      window.location.href = "/"; // Redirect to home page
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Update item function
  const handleUpdateItem = async (updatedItem) => {
    try {
      await firestore.collection("products").doc(updatedItem.id).update(updatedItem);
      const updatedItems = items.map((item) => (item.id === updatedItem.id ? updatedItem : item));
      setItems(updatedItems);
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  };

  // Delete item function
  const handleDeleteItem = async (itemId) => {
    try {
      await firestore.collection("products").doc(itemId).delete();
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  return (
    <div style={{ backgroundImage: `url('https://cdn4.vectorstock.com/i/1000x1000/27/83/a-hardware-store-vector-1122783.jpg')`, height: "100vh", width: "100%", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", color: "#002147", position: "relative" }}>
      <button onClick={handleSignOut} style={{ position: "absolute", top: "10px", right: "10px", padding: "5px 10px", border: "none", backgroundColor: "transparent", color: "#fff", cursor: "pointer" }}>Sign Out</button>
      <h2>Store Page - Published Items</h2>
      {showUpdateModal && (
        <UpdateModal item={selectedItem} onUpdate={handleUpdateItem} />
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {currentItems.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", backgroundColor: "rgba(255, 255, 255, 0.8)", textAlign: "left" }}>
            <h3>{item.name}</h3>
            <p>Available Quantity: {item.quantity}</p>
            <p>Unit Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <button onClick={() => { setSelectedItem(item); setShowUpdateModal(true); }}>Update</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} style={{ margin: "0 5px", padding: "5px 10px", border: "none", backgroundColor: "#007bff", color: "white", cursor: "pointer" }}>
            {i + 1}
          </button>
        ))}
      </div>
      <button style={{ marginTop: "20px", padding: "10px 20px", border: "none", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", fontWeight: "bold" }}>
        <Link to="/add-new-item" style={{ color: "white", textDecoration: "none" }}>Add New Item</Link>
      </button>
    </div>
  );
};

export default StorePage;
