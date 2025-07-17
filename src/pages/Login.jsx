import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // ✅ move to top level

  const handleLogin = (e) => {
    e.preventDefault(); // prevent form reload
    navigate("/dash");  // ✅ navigate to dashboard
  }

  return (
    <>
      <h2>Branch Login</h2>
      <p>Enter Your email and password to login</p>
      <form onSubmit={handleLogin}>
        <select>
          <option value="">Pollachi</option>
          <option value="">Tirupur</option>
          <option value="">Coimbatore</option>
        </select>

        <label>Email</label>
        <input type="text" placeholder="Enter Your Email"  />

        <label>Password</label>
        <input type="password" placeholder="Enter Your Password"  />

        <a href="#">Forgot Password</a><br />

        <input type="checkbox" />
        <label>Keep Me Logged In</label><br />

        <button type="submit">LOGIN</button>
      </form>
    </> 
  );
}

export default Login;
