import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { signup } from "../../store/data";

function SignupModal () {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const users = useSelector(state => state.data.data.users);

  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    users.forEach(user => {
      if (user.email === email) {
        setErrors(['Email already exists'])
      } else if (user.username === username) {
        setErrors(['Username already exists'])
      } else if (password !== confirmPassword) {
        setErrors(['Passwords must match'])
      } else {
        dispatch(signup(username, email, first_name, last_name, password))
        closeModal()
      }
    })
  }

  return (
    <>
      <div className="bg-white rounded-lg w-80 h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl pb-10">Sign Up</h1>
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
          <input
            className="border-2 border-gray-300 rounded-lg w-3/4 h-10 mb-4 p-2"
            type="text"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
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
          <input
            className="border-2 border-gray-300 rounded-lg w-3/4 h-10 mb-4 p-2"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-3/4 h-10 mb-2 p-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  )
}

export default SignupModal;
