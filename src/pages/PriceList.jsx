import React from 'react'
import { useState } from 'react';
import { Header } from '../components/Header'
import Poster from "../assets/poster.jpg"
import { useNavigate } from 'react-router-dom'

export const PriceList = () => {
  const [count , setCount] = useState(0);
  const negativeValue = () =>{
      if (count > 0) {
          setCount(count - 1);
      } else {
          setCount(0);
      }
  }

  const navigate = useNavigate();

  const handleGenerate =  (e) =>
  {
    navigate("/dashboard/invoice");
  }

  return (
    <>
    <Header  />

    <div className='flex flex-wrap gap-x-8' >
        <div className='flex mt-5 ' >
      <div className='flex bg-white p-5 '>
        <div className='flex flex-col mr-20' >
          <div>
            <h6 className='text text-lg text-indigo-700 font-bold' >Potrait Frames</h6>
            <p className='text text-green-400' >A4 Size - 8'x 12'</p>
          </div>
          <div className='mt-8'>
            <h6 className='text text-lg text-indigo-700 font-bold' >Frame Details:</h6>
            <p>Material High-Quality Wood Finish</p>
          </div>
          <div className='mt-3' >
            <h6 className='text text-green-400 text-2xl font-bold'>Rs.1000              
            </h6>
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
    <div className='flex mt-5' >
      <div className='flex bg-white p-5 '>
        <div className='flex flex-col mr-20' >
          <div>
            <h6 className='text text-lg text-indigo-700 font-bold' >Potrait Frames</h6>
            <p className='text text-green-400' >A4 Size - 8'x 12'</p>
          </div>
          <div className='mt-8'>
            <h6 className='text text-lg text-indigo-700 font-bold' >Frame Details:</h6>
            <p>Material High-Quality Wood Finish</p>
          </div>
          <div className='mt-3' >
            <h6 className='text text-green-400 text-2xl font-bold'>Rs.1000              
            </h6>
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
    <div className='flex mt-5' >
      <div className='flex bg-white p-5 '>
        <div className='flex flex-col mr-20' >
          <div>
            <h6 className='text text-lg text-indigo-700 font-bold' >Potrait Frames</h6>
            <p className='text text-green-400' >A4 Size - 8'x 12'</p>
          </div>
          <div className='mt-8'>
            <h6 className='text text-lg text-indigo-700 font-bold' >Frame Details:</h6>
            <p>Material High-Quality Wood Finish</p>
          </div>
          <div className='mt-3' >
            <h6 className='text text-green-400 text-2xl font-bold'>Rs.1000              
            </h6>
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
    <div className='flex mt-5' >
      <div className='flex bg-white p-5 '>
        <div className='flex flex-col mr-20' >
          <div>
            <h6 className='text text-lg text-indigo-700 font-bold' >Potrait Frames</h6>
            <p className='text text-green-400' >A4 Size - 8'x 12'</p>
          </div>
          <div className='mt-8'>
            <h6 className='text text-lg text-indigo-700 font-bold' >Frame Details:</h6>
            <p>Material High-Quality Wood Finish</p>
          </div>
          <div className='mt-3' >
            <h6 className='text text-green-400 text-2xl font-bold'>Rs.1000              
            </h6>
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
    </div>

    <div className='flex justify-end' >
    <button onClick={handleGenerate} className=" bg-indigo-700 text-md text-white mt-5 px-5 py-1 rounded-2xl cursor-pointer" >Generate Bill</button>    
    </div>
    </>
    )
}