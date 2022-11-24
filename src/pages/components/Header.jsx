import React from 'react'
import  {useNavigate} from 'react-router-dom'
import { useDispatch} from "react-redux"
const Header = () => {
    const dispach = useDispatch()
    const navigte=useNavigate()

    const style={

       header1:{
           display:"flex",
           height:"60px",
           alignItems:"center",
           justifyContent:"space-between",
           margin:"0px 8%",
           color:"#fff"
       },
       HeaderButton:{
           border:"none",
           borderRadius:"20px",
           backgroundColor:"blue",
           color:"white",
           padding:"5px 20px"
       }

    }

  return (
<>
<div style={style.header1}>

    <h1>This is my personal website</h1>

<button style={style.HeaderButton} onClick={()=>{
  localStorage.removeItem('token')
  sessionStorage.removeItem('token')
  dispach({type:"logged"})
  navigte('/')

  }}
>Logout</button>

</div>

</>
  )
}

export default Header