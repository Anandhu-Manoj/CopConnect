

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Local from './pages/Local'
import Localac from './pages/Localac'
import Odash from './pages/Odash'
import Jdash from './pages/Jdash'

function App() {
  
  return (
    <>
     
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/local" element={<Local/>}></Route>
      <Route path="/localac" element={<Localac/>}></Route>
      <Route path="/od" element={<Odash/>}></Route>
      <Route path="/jd" element={<Jdash/>}></Route>
     </Routes>


    </>
  )
}

export default App
