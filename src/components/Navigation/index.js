import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";

function Navigation() {
  return (
    <ul className="flex justify-between bg-gradient-to-r h-10 from-purple-500 to-pink-500">
      <NavLink to="/" exact className="flex ml-10 text-xl font-bold items-center">
        TECHHUB
      </NavLink>
      <div className="flex items-center gap-x-4">
        <NavLink to="/cart" className="cursor-pointer flex items-center text-xl">
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
        <ProfileButton/>
      </div>
    </ul>
  )

};

export default Navigation;
