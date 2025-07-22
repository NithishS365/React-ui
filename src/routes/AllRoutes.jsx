import { Route , Routes } from "react-router-dom"; 
import { DashBoard, Login, PriceList, Report, Profile, DashBoardHome} from "../pages";

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
        </Route>
    </Routes>
    </>
  )
}
