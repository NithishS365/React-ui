import { Route , Routes } from "react-router-dom"; 
import { DashBoard, Login, PriceList, Report, Profile, DashBoardHome, Invoice} from "../pages";
import { useEffect, useState } from "react";

export const AllRoutes = () => {

const [name, setName] = useState(() => {
  try {
    const stored = localStorage.getItem("name");
    return stored ? JSON.parse(stored) : "";
  } catch {
    return "";
  }
});

useEffect(() => {
  localStorage.setItem("name", JSON.stringify(name));
}, [name]);

const [branch, setBranch] = useState(() => {
  try {
    const stored = localStorage.getItem("branch");
    return stored ? JSON.parse(stored) : "";
  } catch {
    return "";
  }
});

useEffect(() => {
  localStorage.setItem("branch", JSON.stringify(branch));
}, [branch]);


const defaultProducts = [
  { id: 1, name: "Size - 8 x 12", price: 1000, quantity: 0 },
  { id: 2, name: "Size - 20 x 24", price: 2200, quantity: 0 },
  { id: 3, name: "Size - 16 x 20", price: 1900, quantity: 0 },
  { id: 4, name: "Size - 4 x 6", price: 500, quantity: 0 },
];

const [products, setProducts] = useState(() => {
  try {
    const storedProducts = localStorage.getItem("products");
    const parsed = JSON.parse(storedProducts);
    return Array.isArray(parsed) ? parsed : defaultProducts;
  } catch {
    return defaultProducts;
  }
});

useEffect(() => {
  localStorage.setItem("products", JSON.stringify(products));
}, [products]);



  return (
    <>
    <Routes>
        <Route path="/" element={<Login branch={branch} setBranch={setBranch} name={name} setName={setName}  />} />
        <Route path="/dashboard" element={<DashBoard name={name} setName={setName} />}>
            <Route index element={<DashBoardHome branch={branch}/>} ></Route>
            <Route path="pricelist" element={<PriceList branch={branch}  products={products} setProducts={setProducts} />}></Route>
            <Route path="invoice" element={<Invoice branch={branch}  products={products} setProducts={setProducts} />} ></Route>
            <Route path="report" element={<Report branch={branch} />} ></Route>
            <Route path="profile" element={<Profile branch={branch}/>} ></Route>
        </Route>
    </Routes>
    </>
  )
}