import React from 'react'
import {useNavigate} from "react-router-dom"
const Card = ({text,addr}) => {
  const navigate=useNavigate()

  const  style={
        card:{
            width:"300px",
            height:"200px",
            border:"1px solid green",
            textDecoration:"none"
            ,padding:"0px",
            color:"#fff",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            margin:"20px",
            boxShadow:
            '0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)',

        }
    }

  return (
      <div>

  
    <div onClick={()=>{navigate(addr)}} style={style.card}>
    <h3>{text}</h3>
    </div>

    </div>
  )
}

export default Card