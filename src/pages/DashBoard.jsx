import {Link, NavLink, Outlet } from "react-router-dom"
import Logo from "../assets/pngwing.png"
import { useNavigate } from "react-router-dom"
export const DashBoard = ({name,setName}) => {

  const navigate = useNavigate();
  const handlelogout = ()=>
  {
    navigate("/");
  }

  const inactive = "flex mx-5 my-5 text-gray-300 font-medium fill-gray-300";
  const active = "flex mx-5 my-5 text-indigo-700 font-bold fill-indigo-700 border border-t-0 border-b-0 border-l-0 border-r-3 ";
  

  return (
    <div className="flex">
      <aside className="max-w-[150px]">
          <Link to="/dashboard" >
          <div className="my-10 mx-5 flex items-center">
            <img src={Logo} alt="Logo" className="w-8" />
            <h1 className="text-3xl text-indigo-800 font-bold ml-2" >{name}</h1>
          </div>
          </Link>
          
          <div className="w-80 mt-15"> 
            <NavLink to="/dashboard" className={({isActive})=>isActive? active : inactive} end><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>Dashboard</NavLink>
            <NavLink to="/dashboard/pricelist" className={({isActive})=>isActive? active : inactive} ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>Price List</NavLink>
            <NavLink to="/dashboard/report" className={({isActive})=>isActive? active : inactive} ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/></svg>Report</NavLink>
            <NavLink to="/dashboard/profile" className={({isActive})=>isActive? active : inactive} ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm69-80h422q-44-39-99.5-59.5T480-280q-56 0-112.5 20.5T269-200Zm211-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z"/></svg>Profile</NavLink>
          </div>
          <button onClick={handlelogout} className="mx-5 mt-90 bg-indigo-700 text-md text-white mt-5 px-5 py-1 rounded-2xl cursor-pointer" >Logout</button>
      </aside>
      <main className="bg-indigo-50 w-full min-h-screen px-8 pt-5  ">
            <Outlet/>
      </main>
    </div>
  )
}