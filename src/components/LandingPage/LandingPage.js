import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/categories">Category Register</Link>
          </li>
        </ul>
      </nav>
      <h1>Welcome to the Landing Page!</h1>
      {/* You can add more content here */}
    </div>
  );
};

export default LandingPage;
