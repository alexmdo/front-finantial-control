import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        login: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { token } = response.data;
            localStorage.setItem('token', token);
            window.location.href = '/';
        } catch (error) {
            console.log("Error logging in:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login">Email:</label>
                <input type="email" id="login" name="login" value={formData.login} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;