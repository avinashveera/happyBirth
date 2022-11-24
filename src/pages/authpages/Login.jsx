import React from 'react'
import style from "./auth.module.css"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"

const Login = () => {
const dispach = useDispatch()
const data = useSelector(state => state.logData)
const navigate=useNavigate()

  const login=async()=>{
    fetch('https://veera799.herokuapp.com/api/login',
    {
      method:'POST',
      headers:{
          'Content-Type': 'application/json',
      },
    body:JSON.stringify(data.value),
    }
    ).then(res=>res.json()).then(res=>{
    
      if(res.success===false){
        alert(res.message)
      }else{
        localStorage.setItem('token',res.token)
        sessionStorage.setItem('token',res.token)
        dispach({type:"logged"})
        navigate('/')
      }
      
    })
    
    }


  return (
    <div className={style.signupDiv}>

      <div className={style.signupDiv2}>
        <h1>sign up for admin</h1>
        <input onChange={(e) => { dispach({ type: "login", payload: [e.target.name, e.target.value] }) }} type="text" name="name" id="" />
        <input onChange={(e) => { dispach({ type: "login", payload: [e.target.name, e.target.value] }) }} type="password" name="password" id="" />
        <button onClick={()=>{login()}}>login</button>
        <button onClick={()=>{navigate('/signup')}} >signup</button>
        <a href='/forgetpassword'>foget password</a>
      </div>
    </div>
  )
}

export default Login