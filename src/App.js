import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import CategoryForm from "./components/Category/CategoryForm";
import LandingPage from "./components/LandingPage/LandingPage"; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/login" element={<LoginForm />} />
          <Route path="/categories" element={<CategoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
