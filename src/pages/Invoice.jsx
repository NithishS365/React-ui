import React from 'react'
import { useState } from 'react';
import { Header } from "../components/Header";
import  html2pdf  from 'html2pdf.js';

export const Invoice = ({branch, products,setProducts}) => {
    const [name, setName] = useState("");
    const textChange = (e) => {
        setName(e.target.value);
    }

    const handleclick = (e) =>  
    {
      e.preventDefault();
      const invoice = document.getElementById('in');
      html2pdf().from(invoice).set({
        margin: 1,
        filename: 'invoice.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }).save();
    }

    const cartproducts = products.filter((item)=>
    (
      item.quantity !== 0
    ))

    const total = cartproducts.reduce((acc,cur)=> acc+(cur.price*cur.quantity),0);

    const date = new Date();

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate()+2);

  return (
    <>
    <Header pname="Invoice" branch={branch}/>
    <br />
   <div className="flex justify-center gap-6">
    
    <div id='in' className="bg-white text-black p-2 w-3/2 rounded shadow-lg ">
    <div className='bg-black text-white rounded shadow-lg p-4 flex justify-between'>
      <div>
        <h2 className="text-xl font-bold uppercase">Sokkai - The Clothing Brand</h2>
        <p className="text-xs mt-1">Make all checks payable to Maheshwari Kumar</p>
      </div>

      <div className="text-right">
            <p className="font-bold">Invoice : <span className="text-gray-300">#1713175199492</span></p>
            <p>Date: <span className="text-gray-300">{date.toLocaleDateString()}</span></p>
      </div>
    </div>
      <div className="mt-4 text-sm space-y-1">
        <div className="flex justify-between">
          <div>
            <p className="font-bold">TO:</p>
            <p> {name !=='' ?name:"ALEX"} </p>
            <p> Salem</p>
            <p> Ammapetku RM Colony</p>
          </div>
          <div >
          <p><span className="font-bold">Phone:</span> 09842674088</p>
          <p><span className="font-bold">Type:</span> HOME</p>
        </div>
          
        </div>

        
        <div className='flex justify-between'>
            <div className="">
            <p><span className="font-bold">Salesperson:</span> Maheshwari Kumar</p>
            <p><span className="font-bold">Payment Terms:</span> Due upon receipt</p>
            </div>
            <div className="div">
            <p><span className="font-bold">Job:</span> Product Sale</p>
            <p><span className="font-bold">Due Date:</span> {dueDate.toLocaleDateString()}</p>
            </div>
        </div>

        <table className="w-full mt-4 text-sm border border-gray-800">
          <thead className=" bg-[#9b9b9b93]  text-black">
            <tr>
              <th className="text-left">QTY</th>
              <th className="text-left">DESCRIPTION</th>
              <th className="text-left">UNIT PRICE</th>
              <th className="text-left">LINE TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {
              cartproducts.map((product)=>
              (
              <tr key={product.name} className="border border-gray-700">
              <td>{product.quantity}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity*product.price}</td>
            </tr>

              ))
            }
            
          </tbody>
        </table>

        <div className="mt-4 text-right space-y-1">
          <p>UNIT TOTAL: {total}</p>
          <p>DELIVERY CHARGES: ₹20</p>
          <p className="text-lg font-bold">TOTAL: {total+20}</p>
        </div>

        <div className="mt-6 text-sm">
          <p>📞 9843943341</p>
          <p>✉ sokkaibrand@gmail.com</p>
          <p>📍 Pudukottai, Tamil Nadu, India</p>
        </div>

        <p className="mt-4 text-center font-bold text-black">THANK YOU</p>
      </div>
    </div>

    <div className="bg-white p-6 w-full lg:w-2/3 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">User Details</h2>

      <form className="space-y-4" >
        <input type="text" name="fullName" onChange={ textChange } placeholder="Full Name" className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input type="email" name="email" placeholder="Email" className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input type="text" name="address" placeholder="Address" className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="district" placeholder="District" className="border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="state" placeholder="State" className="border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="phone" placeholder="Phone No." className="border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="altPhone" placeholder="Alternate Phone No." className="border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <input type="date" name="deliveryDate" placeholder="Delivery Date" className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button onClick={handleclick} type="button" className="w-full md:w-auto bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-all duration-200">
          Download</button>
      </form>
    </div>
  </div>
   
    
    
    
    
    </>
  )
}