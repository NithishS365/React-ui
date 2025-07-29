import React from 'react'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/card'
import { useState
  
 } from 'react'

export const PriceList = ({branch, products,setProducts}) => {

  const updatedcount = (id,count) =>
  {
    const updated = products.map((product)=>
    
      product.id === id? {...product,quantity:count} : product

    );

    setProducts(updated);
  };

  const navigate = useNavigate();

  const handleGenerate =  (e) =>
  {
    navigate("/dashboard/invoice");
  }

  return (
    <>
    <Header pname="Price List" branch={branch} />

    <div className='flex flex-wrap gap-x-4' >
      {
        products.map((product)=>
        (
                 < Card key={product.id} product={product} updatedcount={updatedcount} />

        ))
      }
    </div>
    <div className='flex justify-end' >
    <button onClick={handleGenerate} className=" bg-indigo-700 text-md text-white mt-5 px-5 py-1 rounded-2xl cursor-pointer" >Generate Bill</button>    
    </div>
    </>
    )
}

