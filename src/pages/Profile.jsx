import React from 'react'
import { Header } from '../components/Header';
import  Img  from "../assets/cuteboy.png";
export const Profile = ({branch}) => {
  return (
    <div>
      <Header pname="Profile" branch={branch} />
       <div className="max-w-4xl mx-auto mt-10 bg-white h-90 shadow-md rounded-2xl overflow-hidden">
    
    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 flex justify-between items-center rounded-t-2xl">
      <h2 className="text-white text-lg font-semibold">Your Profile</h2>
      <img src={Img}
           alt="Profile" className="w-28 h-28 rounded-full border-4 border-white -mb-14 mt-2 shadow-lg object-cover" />
    </div>

    <div className="px-6 pt-16 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-sm text-gray-700">
      
      <div className="flex">
        <span className="w-28 font-medium">Admin id:</span>
        <span className="text-indigo-800 font-semibold">110A</span>
      </div>
      
      <div className="flex">
        <span className="w-28 font-medium">Name:</span>
        <span className="text-indigo-800 font-semibold">Nithish S</span>
      </div>
      
      <div className="flex">
        <span className="w-28 font-medium">Address:</span>
        <span className="text-indigo-800 font-semibold">Pollachi</span>
      </div>
      
      <div className="flex">
        <span className="w-28 font-medium">Contact No.:</span>
        <span className="text-indigo-800 font-semibold">984123XXXX</span>
      </div>
      
      <div className="flex">
        <span className="w-28 font-medium">Email:</span>
        <span className="text-indigo-800 font-semibold">abc123@gmail.com</span>
      </div>
      
      <div className="flex">
        <span className="w-28 font-medium">Password:</span>
        <span className="text-indigo-800 font-semibold">*</span>
      </div>

    </div>


    <div className="px-6 pb-6">
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-md float-right">
        Edit
      </button>
    </div>
    
  </div>
  </div>
  )
}