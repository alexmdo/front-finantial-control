import React, { useState } from 'react';

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
    <div>
      <h2>Categories:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {editedCategory && editedCategory.id === category.id ? (
              <div>
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
                <select name="type" value={editedCategory.type} onChange={handleChange}>
                  <option value="EXPENSE">Expense</option>
                  <option value="INCOME">Income</option>
                </select>
                <button onClick={handleUpdate}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{category.name}</strong> - Color: {category.color}, Icon: {category.icon}, Type: {category.type}
                <button onClick={() => handleEdit(category)}>Edit</button>
                <button onClick={() => onDelete(category.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
