import React from "react";

const CategoryList = ({ categories, onUpdate, onDelete }) => {
    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <strong>{category.name}</strong> - Color: {category.color} - Icon: {category.icon} - Type: {category.type}
                        <button onClick={() => onUpdate(category)}>Edit</button>
                        <button onClick={() => onDelete(category.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;