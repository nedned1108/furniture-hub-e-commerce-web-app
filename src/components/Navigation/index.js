import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";

function Navigation() {
  return (
    <ul className="flex justify-between bg-gradient-to-r h-8 from-purple-500 to-pink-500">
      <NavLink to="/" exact className="ml-5 text-lg font-bold">
        TECHHUB
      </NavLink>
      <div className="flex gap-x-2">
        <button>
          <i className="fa-solid fa-cart-shopping flex items-center"></i>
        </button>
        <ProfileButton/>
      </div>
    </ul>
  )

};

export default Navigation;
