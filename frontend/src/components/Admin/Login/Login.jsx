import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [admin, setAdmin] = useState({
    gmail: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!admin.gmail || !admin.password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      localStorage.removeItem("adminAuth");
      const response = await axios.post(
        "http://localhost:3000/api/auth/adminlogin",
        admin
      );
      const token = response.data.token;
      if (token) {
        localStorage.setItem("adminAuth", token);
        navigate("/admin");
      } else {
        setError("Login failed. Please check your email and password.");
      }
    } catch (error) {
      setError("Login failed. Please check your email and password.");
    }
  };

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center py-8 bg-slate-500 ">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
        LMS Admin Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12 md:w-1/2"
      >
        <div className="mb-4">
          <label htmlFor="email" className={labelStyle}>
            Email
          </label>
          <input
            type="email"
            name="gmail"
            value={admin.gmail}
            id="email"
            placeholder="Enter Email"
            required
            className={inputStyle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className={labelStyle}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={admin.password}
            id="password"
            placeholder="Enter Password"
            required
            className={inputStyle}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Log in
        </button>
        {error && <b className="text-red-500">{error}</b>}
      </form>
    </div>
  );
}

// CSS classes
const labelStyle = "block text-gray-700 text-sm font-bold mb-2";
const inputStyle =
  "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";