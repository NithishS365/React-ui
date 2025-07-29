import React from 'react'
import { Header } from "../components/Header"
import LineChart from '../components/LineChart'
import PieChart from '../components/PieChart'

export const DashBoardHome = ({branch}) => {
  return (
    <>
      <Header branch={branch} />
      <div className='flex justify-baseline mt-4'>
        <div className='bg-white flex pl-3 py-4 pr-30 justify-baseline items-center rounded-2xl mr-8'>
          <div className='fill-indigo-700 bg-indigo-50 p-2 rounded-3xl'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="M160-160v-516L82-846l72-34 94 202h464l94-202 72 34-78 170v516H160Zm240-280h160q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520H400q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440ZM240-240h480v-358H240v358Zm0 0v-358 358Z" /></svg>
          </div>
          <div className='flex flex-col ml-4'>
            <p className='text text-gray-500 font-normal'>Orders</p>
            <h1 className='text-indigo-800 text-3xl font-medium' >45</h1>
          </div>
        </div>
        <div>
          <div className='bg-white flex pl-3 py-4 pr-30 justify-baseline items-center rounded-2xl mr-8'>
            <div className='fill-indigo-700 bg-indigo-50 p-2 rounded-3xl'>
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" ><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" /></svg>            </div>
            <div className='flex flex-col ml-4'>
              <p className='text text-gray-500 font-normal'>Total Payments</p>
              <h1 className='text-indigo-800 text-3xl font-medium' >Rs.200,000</h1>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-white flex pl-3 py-4 pr-30 justify-baseline items-center rounded-2xl mr-8'>
            <div className='fill-indigo-700 bg-indigo-50 p-2 rounded-3xl'>
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm67-105 28-28-75-75v-112h-40v128l87 87Zm-547 65q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v250q-18-13-38-22t-42-16v-212h-80v120H280v-120h-80v560h212q7 22 16 42t22 38H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" /></svg>            </div>
            <div className='flex flex-col ml-4'>
              <p className='text text-gray-500 font-normal'>Pending</p>
              <h1 className='text-indigo-800 text-3xl font-medium' >22</h1>
            </div>
          </div>
        </div>
      </div>
      
      <br />




      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6  ">

        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">This Month</h3>
            <div className="text-sm text-gray-500">Graph View</div>
          </div>
          <h2 className="text-xl font-bold">Rs. 200,000</h2>
          <p className="text-green-600 text-sm mt-1">✔ On track of this area</p>
          <div className="h-40 bg-blue-100 mt-4 rounded-xl flex items-center justify-center text-gray-500">
            <LineChart />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Payment Analysis</h3>
            <div className="text-sm text-gray-500">Monthly</div>

          </div>
          <PieChart className="h-100" />
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">Payments Done </p>
      </div>


     
    </>

  )
}