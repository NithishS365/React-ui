import { useState } from "react"
import Poster from "../assets/poster.jpg"




export const Card = ({product, updatedcount}) => {


  const handlepositive = () => {
    const newCount = product.quantity + 1;
    updatedcount(product.id, newCount);
  };

  const handlenegative = () => {
    const newCount = product.quantity > 0 ? product.quantity - 1 : 0;
    updatedcount(product.id, newCount);
  };

  return (
    <>
    <div className='flex mt-5' >
      <div className='flex bg-white p-5 '>
        <div className='flex flex-col mr-20' >
          <div>
            <h6 className='text text-lg text-indigo-700 font-bold' >Potrait Frames</h6>
            <p className='text text-green-400' >{product.name}</p>
          </div>
          <div className='mt-8'>
            <h6 className='text text-lg text-indigo-700 font-bold' >Frame Details:</h6>
            <p>Material High-Quality Wood Finish</p>
          </div>
          <div className='mt-8' >
            <h6 className='text text-green-400 text-2xl font-bold'>{product.price}             
            </h6>
          </div>
          <div className='flex items-center justify-end' >
            <button onClick={handlenegative} className='bg-indigo-700 px-2 rounded-4xl font-bold text-white mr-3' >-</button>
            <p>{product.quantity}</p>
            <button onClick={handlepositive} className='bg-indigo-700 px-2 rounded-4xl font-bold text-white ml-3'>+</button>
          </div>
        </div>
        <div className='w-40'>
            <img src={Poster} alt="Poster" />
        </div>
      </div>
    </div></>
)
}
