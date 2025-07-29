import React from 'react'
import { Header } from '../components/Header';
export const Report = ({branch}) => {
  return (
    <>
    <Header pname="Report" branch={branch} />
      <div class="max-w-6xl mx-auto p-6">
    

    <div class="bg-white shadow-md rounded-xl p-6 mb-8">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Payment Details</h2>
      <div class="overflow-auto">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="text-left text-sm text-gray-600 border-b">
              <th class="py-2 px-4">Users</th>
              <th class="py-2 px-4">Address</th>
              <th class="py-2 px-4">Date</th>
              <th class="py-2 px-4">Amount</th>
              <th class="py-2 px-4">Invoice</th>
            </tr>
          </thead>
          <tbody class="text-sm text-gray-800">
            
          
            <tr class="border-b">
              <td class="py-2 px-4">Nithish</td>
              <td class="py-2 px-4">Tirunelveli</td>
              <td class="py-2 px-4">24.Aug.2024</td>
              <td class="py-2 px-4">Rs. 1500</td>
              <td class="py-2 px-4"><button class="bg-blue-600 text-white text-xs px-3 py-1 rounded-md">Download</button></td>
            </tr>
            <tr class="border-b">
              <td class="py-2 px-4">Antony</td>
              <td class="py-2 px-4">Karur</td>
              <td class="py-2 px-4">14.Sep.2024</td>
              <td class="py-2 px-4">Rs. 4500</td>
              <td class="py-2 px-4"><button class="bg-blue-600 text-white text-xs px-3 py-1 rounded-md">Download</button></td>
            </tr>
           
            <tr class="border-b">
              <td class="py-2 px-4">Vijay</td>
              <td class="py-2 px-4">Pollachi</td>
              <td class="py-2 px-4">15.Oct.2024</td>
              <td class="py-2 px-4">Rs. 1800</td>
              <td class="py-2 px-4"><button class="bg-blue-600 text-white text-xs px-3 py-1 rounded-md">Download</button></td>
            </tr>
          
           
          
            
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-white shadow-md rounded-xl p-4">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Weekly Payments</h2>
      <div class="flex justify-between space-x-6 h-48">

        <div class="flex flex-col items-center space-y-1">
          <div class="h-20 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-12 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-6 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">17</span>
        </div>
         <div class="flex flex-col items-center space-y-1">
          <div class="h-20 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-12 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-6 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">22</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-22 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-12 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-6 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">25</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-20 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-14 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-4 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">18</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-20 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-12 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-6 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">22</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-18 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-10 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-4 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">19</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-22 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-10 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-4 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">20</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-20 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-14 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-4 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">18</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-14 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-8 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-6 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">21</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-20 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-12 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-6 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">22</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-20 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-12 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-6 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">17</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-18 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-10 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-4 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">23</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-16 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-14 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-4 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">24</span>
        </div>
        <div class="flex flex-col items-center space-y-1">
          <div class="h-22 w-4 bg-indigo-500 rounded-t"></div>
          <div class="h-12 w-4 bg-cyan-400 rounded-t"></div>
          <div class="h-6 w-4 bg-gray-300 rounded-t"></div>
          <span class="text-sm text-gray-500 mt-1">25</span>
        </div>
      </div>
    </div>

  </div>
  </>
  )
}