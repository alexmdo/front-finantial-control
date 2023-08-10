import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from "./CategoryList";
import CreateForm from "./CreateForm";

const CategoryForm = () => {
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users/me/categories', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCategories(response.data.content);
    } catch (error) {
      console.log('Error fetching categories:', error);
      setMessage(`Error fetching categories: ${error.response.data.message}`);
    }
  };

  const createCategory = async (categoryData) => {
    try {
      await axios.post('http://localhost:8080/api/users/me/categories', categoryData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchCategories();
      setMessage('Category created successfully');
    } catch (error) {
      console.log('Error creating category:', error);
      setMessage(`Error creating category: ${error.response.data.message}`);
    }
  };

  const updateCategory = async (categoryData) => {
    try {
      await axios.put( `http://localhost:8080/api/users/me/categories/${categoryData.id}`, categoryData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchCategories();
      setMessage('Category updated successfully');
    } catch (error) {
      console.log('Error updating category:', error);
      setMessage(`Error updating category: ${error.response.data.message}`);
    }
  };

  const deleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/me/categories/${categoryId}`, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      });
      fetchCategories();
      setMessage('Category deleted successfully');
    } catch (error) {
      console.log('Error deleting category:', error);
      setMessage(`Error deleting category: ${error.response.data.message}`);
    }
  };

  return (
    <div>
      {message && <div>{message}</div>}
      <h1>Category Register</h1>
      <CreateForm onSubmit={createCategory} />
      <CategoryList categories={categories} onUpdate={updateCategory} onDelete={deleteCategory} />
    </div>
  );

};

export default CategoryForm;