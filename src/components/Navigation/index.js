import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "./ProfileButton";

function Navigation() {
  return (
    <ul className="flex justify-between">
      <NavLink to="/" exact className="ml-5">
        Home
      </NavLink>
      <ProfileButton className="mr-5"/>
    </ul>
  )

};

export default Navigation;
