import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import { login } from "../../store/session";
import SignupModal from "../SignupModal";

function LoginModal () {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal(); 
  const users = useSelector(state => state.data.users);

  const handleSubmit = async (e) => {
      e.preventDefault();
      users.forEach(user => {
        if (user.email === email && user.password === password) {
          dispatch(login(user))
          closeModal()
        } else {
          setErrors(['Invalid credentials'])
        }
      })
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
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-3/4 h-10 mb-2 p-2 list-none flex justify-center cursor-pointer"
            itemText="Sign Up"
            modalComponent={<SignupModal />}
          />
        </form>
      </div>
    </>
  )
}

export default LoginModal;
