import React from "react";

const CategoryList = ({ categories }) => {
    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <strong>{category.name}</strong> - Color: {category.color} - Icon: {category.icon}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;