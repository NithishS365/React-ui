import React from 'react'
import { useState } from 'react';
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { Card } from "../components/Card";

export const PriceList = () => {

const [products,setProducts] = useState([
    {id:1,name:'Size - 8 x 12',price:1000,quantity:0},
    {id:2,name:'Size - 20 x 24',price:2200,quantity:0},
    {id:3,name:'Size - 16 x 20',price:1900,quantity:0},
    {id:4,name:'Size - 4 x 6',price:500,quantity:0}
  ])

  
  const navigate = useNavigate();
  const handleGenerate =  (e) =>
  {
    navigate("/dashboard/invoice");
  }
  return (
    <>
    <Header />
    <div className='flex flex-wrap gap-x-8' >
      {
        products.map((product) => (
          < Card product={product}  />
        ))
      }
    </div>
    <div className='flex justify-end' >
    <button onClick={handleGenerate} className=" bg-indigo-700 text-md text-white mt-5 px-5 py-1 rounded-2xl cursor-pointer" >Generate Bill</button>    
    </div>
    </>
    )
}