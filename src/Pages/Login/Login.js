import React, { useState } from 'react'
import Nav from '../../Componets/Nav'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    var [username,setUsername] = useState('')
    var [pass,setPass] = useState('')
    var nav = useNavigate()
    function con(){
        nav("/Homedb")
    }
    const inputStyle={
        background : "#F3F3F3",
        border : "solid #E2DFDF 1px",
        outline:"none",
        width:"100%",
        borderRadius: "12px",
        padding:"15px 30px 15px 30px"
    }

  return (
    <div>
        <Nav/>
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
            <div className='d-flex flex-column justify-content-center p-5 shadow-lg bg-body rounded'>
                <h1><b>Login</b></h1>
                <div className='mb-3 mt-4'>
                    <h6>Email</h6>
                    <input style={inputStyle} type={'email'} placeholder='email@example.com' onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div className='mt-3 mb-3'>
                    <h6>Password</h6>
                    <input style={inputStyle} type={'password'} placeholder='password' onChange={(e)=>setPass(e.target.value)} required />
                </div>
                <button className='btn btn-danger m-auto w-100 mt-4 pt-3 pb-3' style={{borderRadius:"15px", fontSize:"20px", backgroundColor:"#E96363"}} onClick={()=>{con();}}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login