import React from 'react'
import { Header } from '../components/Header'
import Poster from "../assets/poster.jpg"

export const PriceList = () => {
  return (
    <>
    <Header />

    <div className='flex mt-10' >
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
          <div className='mt-8' >
            <h6 className='text text-green-400 text-2xl font-bold'>Rs.1000              
            </h6>
          </div>
          <div className='flex items-center justify-end' >
            <button className='bg-indigo-700 px-2 rounded-4xl font-bold text-white me-2' >-</button>
            <button>1</button>
            <button className='bg-indigo-700 px-2 rounded-4xl font-bold text-white ml-2'>+</button>
          </div>
        </div>
        <div className='w-44'>
            <img src={Poster} alt="Poster" />
        </div>
      </div>
    </div>
    </>
    )
}

