import { firebase, firestore, auth } from './firebase'; // Import Firebase, Firestore, and Auth

// Add an item to the store
export const addItemToStore = async (item) => {
  try {
    const itemsCollection = firestore.collection('items');
    await itemsCollection.add(item);
    console.log('Item added successfully');
    return true;
  } catch (error) {
    console.error('Error adding item: ', error);
    return false;
  }
};

// Get all items from the store
export const getAllItems = async () => {
  try {
    const itemsCollection = firestore.collection('items');
    const snapshot = await itemsCollection.get();
    const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return items;
  } catch (error) {
    console.error('Error getting items: ', error);
    return [];
  }
};

// Update an item in the store
export const updateItem = async (itemId, updatedItem) => {
  try {
    const itemDoc = firestore.collection('items').doc(itemId);
    await itemDoc.update(updatedItem);
    console.log('Item updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating item: ', error);
    return false;
  }
};

// Delete an item from the store
export const deleteItem = async (itemId) => {
  try {
    const itemDoc = firestore.collection('items').doc(itemId);
    await itemDoc.delete();
    console.log('Item deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting item: ', error);
    return false;
  }
};

export default { addItemToStore, getAllItems, updateItem, deleteItem };
