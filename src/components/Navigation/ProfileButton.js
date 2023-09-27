import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginModal from "../LoginModal";
import { Link } from "react-router-dom";
import { logout } from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const currentUser = useSelector(state => state.session.user);

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

  const login = (e) => {
    e.preventDefault();
    closeMenu();
  }

  const logoutButton = async (e) => {
    e.preventDefault();
    dispatch(logout());
    closeMenu();
  }

  return (
    <div className="mr-5">
      <button onClick={openMenu} className="menu-button">
        <i className="fas fa-solid fa-bars"></i>
      </button>
      <div className={`absolute flex flex-col items-start z-10 border-2 border-color-indigo-500 rounded-md p-2 text-md text-color-indigo-500 bg-white mx-0, 
        ${showMenu ? '' : 'hidden'}`} ref={ulRef}
      >
        {currentUser ? (
          <ul>
            <li>
              <Link onClick={closeMenu} className="" to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={logoutButton} className="noU" to="/spots/current">Log Out</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="cursor-pointer">
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginModal />}
              />
            </li>
          </ul>
        )
        }
      </div>
    </div>
  );
}

export default ProfileButton;
