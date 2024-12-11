import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
// import { Spinner } from "@material-tailwind/react"; 




 const Root = () => {
  return (
   <>
   <Navbar/>

   <Outlet/>
   <Footer/>
   </>
  )
}


export default Root;


