import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButton from "../../../../startrpacks/react-app/src/components/Navigation/ProfileButton";

function App() {
  return (
    <ul>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <ProfileButton />
    </ul>
  )

};
