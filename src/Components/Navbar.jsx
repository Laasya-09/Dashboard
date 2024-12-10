// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 bg-gray-900 text-white flex items-center px-4 justify-between">
      <div className="text-xl font-bold">Dashboard</div>
      <div>User Profile</div>
    </div>
  );
};

export default Navbar;
