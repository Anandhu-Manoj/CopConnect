

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Local from './pages/Local'
import Localac from './pages/Localac'
import Odash from './pages/Odash'
import Jdash from './pages/Jdash'
import Crimerecords from './pages/Crimerecords'
import Login from './pages/Login'


function App() {
  
  return (
    <>
     
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/local" element={<Local/>}></Route>
      <Route path="/localac" element={<Localac/>}></Route>
      <Route path="/od" element={<Odash/>}></Route>
      <Route path="/jd" element={<Jdash/>}></Route>
      <Route path="/cr" element={<Crimerecords/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      
     </Routes>


    </>
  )
}

export default App
