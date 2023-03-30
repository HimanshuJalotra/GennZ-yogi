import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './Login.css'
import './Signup'
import Footer from '../../common/Footer/Footer'
import Signup from './Signup';
import { response } from 'express';
export default function Login(props) {

    const userData = [
        {
          "user" : "admin", 
          "password": "password"
        }
    ]
    const[user, setUser] = useState ( { 
        "name":"", 
        "pass": ""
     }
     )
     const[tempname , setTempname] = useState ("") ; 
     const[temppass , setTempass] = useState ("") ;
     const[tempemail , setTempemail] = useState ("") 
    const[tempnumber , setTempnumber] = useState ("") 
     const[value, setValue] = useState("true")
    const[signup , setsignup] = useState("false")

    const setform=()=>{ 
      setsignup("true") ; 
    }

     const setLogindata=async ()=> { 
       setUser({ 
        "name":{tempname} ,
        "pass": {temppass} ,
       })
       props.loginhandler(value) ; 
      

      let result = await fetch('http://localhost:5001/register' , { 
        method:'Post',
        body:JSON.stringify({name:tempname,password:temppass}) ,
        headers:{ 
             'Content-Type':'Application/json'
        }, 
      }) ; 

     }


  return (
  <div>
    {(signup==="false")? (
    <div className='login-container'>
    <div className='login-card'>
        <h3>Please login to chat else signup!</h3>
        <form className='loginform'> 
            <input type="text" placeholder="name" onChange={(e)=> {setTempname(e.target.value)}}></input>
            <br></br>
            <input type="password" placeholder="password" onChange={(e)=> {setTempass(e.target.value)}} ></input>
            <br></br>
           
        </form>
        <Button variant="contained" color="success" onClick={setLogindata}>login</Button> <Button variant="contained" color="success" onClick={setform}>Signup!</Button> 
    </div>
    </div>
    ) :  (<Signup loginhandler={props.loginhandler}/>) }

 </div>
      
  )
}
