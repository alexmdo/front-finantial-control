// CategoryList.js

import React, { useState } from 'react';
import './CategoryList.css'; // Import the CSS file

const CategoryList = ({ categories, onUpdate, onDelete }) => {
  const [editedCategory, setEditedCategory] = useState(null);

  const handleEdit = (category) => {
    setEditedCategory({ ...category });
  };

  const handleUpdate = () => {
    onUpdate(editedCategory);
    setEditedCategory(null);
  };

  const handleCancel = () => {
    setEditedCategory(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory((prevEditedCategory) => ({
      ...prevEditedCategory,
      [name]: value,
    }));
  };

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            {editedCategory && editedCategory.id === category.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={editedCategory.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="color"
                  value={editedCategory.color}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="icon"
                  value={editedCategory.icon}
                  onChange={handleChange}
                />
                <select
                  name="type"
                  value={editedCategory.type}
                  onChange={handleChange}
                >
                  <option value="EXPENSE">Expense</option>
                  <option value="INCOME">Income</option>
                </select>
                <button
                  className="button button-primary"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="button button-secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <strong>{category.name}</strong> - Color: {category.color}, Icon: {category.icon}, Type: {category.type}
                <button
                  className="button button-primary"
                  onClick={() => handleEdit(category)}
                >
                  Edit
                </button>
                <button
                  className="button button-secondary"
                  onClick={() => onDelete(category.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
