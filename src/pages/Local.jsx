import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Local = () => {
  return (
    
    <div  >
        
        <div className='d-flex justify-content-center align-items-center flex-column text-center gap-3 mt-3' style={{height:"70vh",marginTop:"-100px"}}>
            <h2 ><i className="fa-solid fa-fingerprint fs-1 fw-bolder"></i></h2>
            <h2  className='d-flex justify-content-center '>Sign in with id</h2>
            <input style={{height:"70px"}} className='form-control w-25 shadow rounded-3' type="text" name="" id=""  placeholder='enter your email'/>
            <input style={{height:"70px"}} className='form-control w-25 shadow rounded-3' type="text" name="" id=""  placeholder='enter your password'/>
            <input style={{height:"70px"}} className='form-control w-25 shadow rounded-3' type="text" name="" id=""  placeholder='enter your aadhar number'/>
            <button className='w-25 rounded-3 border-0 shadow mt-2' style={{height:"50px",backgroundColor:"#ADB2D4"}}>login</button>
           <Link to={'/'}> <button  className=' rounded-3 border-0 shadow mt-2' style={{height:"35px",backgroundColor:"#ADB2D4",width:"375px"}}>BACK</button></Link>
            <div className='mt-3'> <p>dont have a INDIAN PASS  account? <Link to={'/localac'} className='text-success'>create new account</Link></p></div>

        </div>
        <Footer/>
        </div>
  )
}

export default Local