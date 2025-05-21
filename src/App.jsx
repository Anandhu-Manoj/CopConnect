

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Local from './pages/Local'
import Localac from './pages/Localac'
import Odash from './pages/Odash'
import Jdash from './pages/Jdash'
import Crimerecords from './pages/Crimerecords'
import Login from './pages/Login'
import Services from './pages/Services'
import { addLoaderContext } from "./Contexts/LoaderContext";
import { useContext } from "react";
import Spinner from "./Components/Spinner"; // Make sure path is correct




function App() {
   const {loader}=useContext(addLoaderContext)
  
  return (
    <>

   
     <ToastContainer position="top-center" pauseOnHover />
     {loader&&<Spinner/>}
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/local" element={<Local/>}></Route>
      <Route path="/localac" element={<Localac/>}></Route>
      <Route path="/od" element={<Odash/>}></Route>
      <Route path="/jd" element={<Jdash/>}></Route>
      <Route path="/cr" element={<Crimerecords/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      
     </Routes>


    </>
  )
}

export default App
