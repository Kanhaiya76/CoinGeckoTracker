import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

 function MainLayout(){
    return (
        <>

        <Navbar/> {/* this is shared ui we want to across pages */}
        <Outlet  />          {/* The actual page which which will be rendered along with navbar */}
        
        </>
    )
 }

 export default MainLayout