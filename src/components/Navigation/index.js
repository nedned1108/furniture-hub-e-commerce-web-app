import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";

function Navigation() {
  return (
    <ul className="flex justify-between">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <ProfileButton />
    </ul>
  )

};

export default Navigation;
