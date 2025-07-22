import  Login  from "../pages/Login"; 
import { Route , Routes } from "react-router-dom";
import { Re } from "../pages/Re"

export default function Router()
 {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dash" element = { <Re />} />
        <Route></Route>
    </Routes>    
  )
}

