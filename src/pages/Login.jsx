import { useState } from "react"
import Logo from "../assets/pngwing.png"
import { useNavigate } from "react-router-dom"


export const Login = ({branch, setBranch,name ,setName}) => {

  const navigate = useNavigate();

  const handleevent = (e) =>
  {
      e.preventDefault();
      
      navigate("/dashboard")

  }

  const [show,setShow] = useState(false);


  return (
    <div className="bg-amber-50 flex">
      <main className="flex-1 ">
        <form onSubmit={handleevent}>
        <h1 className="text-2xl text-indigo-950 font-medium mt-30">Branch Login</h1>
        <p className="bg-indigo-950 text-white font-light mt-2 shadow w-fit p-2 rounded-2xl" >Enter your email and pasword to login!</p>
        <select onChange={(e)=>setBranch(e.target.value)} className=" border border-gray-400 mt-10 p-2 pr-30 rounded-2xl" >
          <option hidden>Select your Branch...</option>
          <option>Pollachi</option>
          <option>Coimbatore</option>
          <option>Tirupur</option>
          <option>Salem</option>
        </select>
        <label htmlFor="name" className="block mt-5" >Name<span className="text text-red-700  ">*</span></label>
        <input onChange={(e)=>{
          setName(e.target.value);
        }}   id="name" name="name" type="text" className="border border-gray-400 mt-2 rounded-xl py-1 pl-2 pr-10" placeholder="Enter your name..."/>    
        <label htmlFor="email" className="block mt-5" >Email<span className="text text-red-700  ">*</span></label>
        <input id="email" name="email" type="email" className="border border-gray-400 mt-2 rounded-xl py-1 pl-2 pr-10" placeholder="abc@gmail.com"/>    
        <label htmlFor="password" className="block mt-5" >Password<span className="text text-red-700  ">*</span></label>
        <div className="relative w-[300px]" >          
        <input id="password" name="password" type={show?"text":"password"} className="border border-gray-400 mt-2 rounded-xl py-1 pl-2 pr-10 " placeholder="Min of 5 characters"/>
        <button className="absolute top-3 right-19" type="button" onClick={()=>setShow(!show)} > {show? '🙈' : '👁'}</button>
        </div> 
        <a href="/" className="text text-sm text-indigo-700 font-medium" >Forgot Password?</a>
        <input></input>   

        <label htmlFor="signedin" className="flex accent-indigo-700 mt-5"><input id="signedin" name="signedin" type="checkbox" /><span className="ml-2 ">Keep me signed in</span></label>   

        <button type="submit" className="bg-indigo-700 text-xl text-white mt-5 px-5 py-1 rounded-2xl cursor-pointer" >Login</button>
        </form>

    </main>
    <section className=" flex-1 min-h-screen bg-gradient-to-b from-violet-400 to-violet-900 flex flex-col justify-center items-center rounded-bl-[70px]">
      <img src={Logo} alt="logo" className="w-50 mb-10"/>
      <h1 className="text-5xl text-white opacity-50 font-bold" >{name}</h1>
    </section>
    </div>
    
        
    )
}