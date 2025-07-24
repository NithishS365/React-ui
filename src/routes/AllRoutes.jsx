import { Route , Routes } from "react-router-dom"; 
import { DashBoard, Login, PriceList, Report, Profile, DashBoardHome,Invoice} from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />}>
            <Route index element={<DashBoardHome/>} ></Route>
            <Route path="pricelist" element={<PriceList/>}></Route>
            <Route path="report" element={<Report/>} ></Route>
            <Route path="profile" element={<Profile/>} ></Route>
            <Route path="invoice" element={<Invoice />} />
            <Route path="report" element={<Login />} />
        </Route>
    </Routes>
    </>
  )
}
