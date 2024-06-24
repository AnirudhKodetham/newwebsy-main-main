import React, { useState } from 'react';
import '../styles/Admin.css';

const Admin = () => {
  const initialFoodItems = [
    { id: 1, name: 'Biyani', category: 'Non-Veg', price: '₹120', status: 'Available' },
    { id: 2, name: 'Burger', category: 'Burger', price: '₹400', status: 'Out of Stock' },
    { id: 3, name: 'Noodles', category: 'Chinese', price: '₹100', status: 'Available' },
    { id: 4, name: 'Butter Chicken', category: 'Main Course', price: '₹250', status: 'Available' },
    { id: 5, name: 'Roti', category: 'Bread', price: '₹15', status: 'Available' },
    { id: 6, name: 'Kebab', category: 'Starter', price: '₹350', status: 'Out of Stock' },
    { id: 7, name: 'Pizza', category: 'Italian', price: '₹300', status: 'Available' },
    { id: 8, name: 'Coke', category: 'Drinks', price: '₹10', status: 'Out of Stock' },
  ];

  const [foodItems, setFoodItems] = useState(initialFoodItems);

  const updateStatus = (id, newStatus) => {
    setFoodItems(
      foodItems.map(item =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className="admin-page">
      <h1 className="admin-header">Food Management</h1>
      <table className="applications-table">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item) => (
            <tr key={item.id} className="application-row">
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</td>
              <td>
                <button className="out-of-stock" onClick={() => updateStatus(item.id, 'Out of Stock')}>Out of Stock</button>
                <button className="available" onClick={() => updateStatus(item.id, 'Available')}>Available</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
