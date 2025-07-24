import React from 'react'
import { useState } from 'react';
import Poster from "../assets/poster.jpg"
export const Card = ( {product} ) => {

  const [count , setCount] = useState(0);
  const negativeValue = () =>{
      if (count > 0) {
          setCount(count - 1);
      } else {
          setCount(0);
      }
  }

  return (
      <div className='flex mt-5 ' >
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
                <div className='mt-3' >
                  <h6 className='text text-green-400 text-2xl font-bold'>{product.price}</h6>
                </div>
                <div className='flex items-center justify-end' >
                  <button className='bg-indigo-700 px-2 rounded-4xl font-bold text-white mr-3' onClick={ negativeValue }>-</button>
                  <p>{count}</p>
                  <button className='bg-indigo-700 px-2 rounded-4xl font-bold text-white ml-3' onClick={ () => setCount(count+1) }>+</button>
                </div>
              </div>
              <div >
                  <img src={Poster} alt="Poster" className='h-40' />
              </div>
            </div>
          </div>
  )
}
