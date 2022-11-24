import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'

const AddFriend = ({text}) => {

  const navigate=useNavigate()
  const data=useSelector(state=>state.addFriend)
  const dispach=useDispatch()

  const submit=()=>{

    fetch('https://veera799.herokuapp.com/friend/register',
    {method:"POST",body:JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json',
      'token':localStorage.getItem('token')
  }
  
  })
    .then(res=>res).then((res)=>{
     
      navigate('/')
     
    })


  }




  const  style={
        card:{
            width:"100%",
            height:"100%",
            border:"1px solid green",
            textDecoration:"none"
            ,padding:"20px",
            color:"#fff",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            margin:"20px",
            boxShadow:
            '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)',

        },

        input:{
          width:"300px",
          height:'50px',
          border:"none",
          borderRadius:"20px",
          outline:"none",
          margin:"20px",
          padding:"0px 20px"
        
        }


    }

  return (
      <div>

  
    <div style={style.card}>

        <label htmlFor="name">
          name:<input style={style.input} onChange={(e)=>{dispach({type:"addfriend",payload:{name:e.target.name,value:e.target.value}})}} name="name" type="text" />
        </label>
    
        <label htmlFor="name">
          phone:<input style={style.input} onChange={(e)=>{dispach({type:"addfriend",payload:{name:e.target.name,value:e.target.value}})}} name="phone" type="number" />
        </label>

        <label htmlFor="name">
          whatsapp:<input style={style.input} onChange={(e)=>{dispach({type:"addfriend",payload:{name:e.target.name,value:e.target.value}})}} name="whatsapp" type="number" />
        </label>

        <label htmlFor="name">
          facebook:  <input style={style.input} onChange={(e)=>{dispach({type:"addfriend",payload:{name:e.target.name,value:e.target.value}})}} name="facebook" type="text"  />
        </label>

        <label htmlFor="name">
          instagram:  <input style={style.input} onChange={(e)=>{dispach({type:"addfriend",payload:{name:e.target.name,value:e.target.value}})}} name="instagram" type="text" />
        </label>

        <label htmlFor="name">
          birthday:  <input style={style.input} onChange={(e)=>{dispach({type:"addfriend",payload:{name:e.target.name,value:e.target.value}})}} name="birthday" type="text" />
        </label>

        
        <label htmlFor="name">
          <input onClick={()=>{submit()}} style={style.input} value="submit" type="button"/>
        </label>

    </div>

    </div>
  )
}

export default AddFriend