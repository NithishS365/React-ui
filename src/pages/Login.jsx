import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // ✅ move to top level

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dash"); 
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="bg-amber-50 flex-1">
            <div className="m-22 bg-[#b9b9b9]">
                <h2>Branch Login</h2>
                <p>Enter Your email and password to login</p>
                <form onSubmit={handleLogin}>
                    <select>
                    <option placeholder="Enter Branch" value="Pollachi">Pollachi</option>
                    <option value="">Tirupur</option>
                    <option value="">Coimbatore</option>
                    </select>

                    <label>Email</label> 
                    <input type="text" placeholder="Enter Your Email"  />  <br />

                    <label>Password</label>
                    <input type="password" placeholder="Enter Your Password"  /> <br />

                    <a href="#">Forgot Password</a><br />

                    <input type="checkbox" />
                    <label>Keep Me Logged In</label><br />

                    <button className="bg-blue-500 text-white px-4 py-1 rounded" type="submit">LOGIN</button>
                </form>
            </div>
        </div>
        <div className="bg-linear-to-b from-cyan-100 to-cyan-500 flex flex-1 flex-col justify-center items-center ">
           <img className='mb-4' width={200} src="https://ik.imagekit.io/Nithish/732116.png?updatedAt=1752772383223" alt="Error" />
            <h1 className='text-5xl text-cyan-50 text-opacity-50 font-mono font-bold'>Name</h1>
            
        </div>
      </div>
    </> 
  );
}

export default Login;
