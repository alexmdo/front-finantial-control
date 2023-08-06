import React, { useState } from "react";

const CreateForm = ({ onSubmit }) => {
    
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        icon: "",
        type: "EXPENSE"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: "",
            color: "",
            icon: "",
            type: "EXPENSE"
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" value={formData.color} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="icon">Icon</label>
                <input type="text" name="icon" value={formData.icon} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <select id="type" name="type" value={formData.type} onChange={handleChange} required>
                    <option value="EXPENSE">Expense</option>
                    <option value="INCOME">Income</option>
                </select>
            </div>
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateForm;