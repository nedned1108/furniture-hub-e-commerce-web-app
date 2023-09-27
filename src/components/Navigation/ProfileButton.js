import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import OpenModalMenuItem from "./OpenModalMenuItem";
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    closeMenu();
  }

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  
  return (
    <div className="profile-menu">
      <button onClick={openMenu} className="menu-button">
        <i className="fas fa-solid fa-bars"></i>
        <i className="fas fa-duotone fa-circle-user"></i>
      </button>
      <ul className={`${ulClassName}`} ref={ulRef}>
        <div>
          <Link onClick={closeMenu} className="" to="/profile">Profile</Link>
        </div>
        <div>
          <button onClick={logout} className="noU" to="/spots/current">Current Spots</button>
        </div>
      </ul>
    </div>
  );
}

export default ProfileButton;
