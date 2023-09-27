import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";

function LoginModal () {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const users = useSelector(state => state.users);
  console.log(users)

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (users[email] && users[email].password === password) {
    }
  }

  return (
    <>
      <div className="bg-white rounded-lg w-80 h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl pb-10">Log In</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center"
        >
          <ul className="text-red-500">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <input
            className="border-2 border-gray-300 rounded-lg w-3/4 h-10 mb-4 p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="border-2 border-gray-300 rounded-lg w-3/4 h-10 mb-4 p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-3/4 h-10 mb-2 p-2"
          >
            Log In
          </button>
          <OpenModalMenuItem
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-3/4 h-10 mb-2 p-2"
            modalName="signup"
          >
            Sign Up
          </OpenModalMenuItem>
        </form>
      </div>
    </>
  )
}

export default LoginModal;
