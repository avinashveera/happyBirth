import {useNavigate} from 'react-router-dom'
import style from "./auth.module.css"
import {useSelector,useDispatch} from "react-redux"
const Signup = () => {
  const navigate=useNavigate()
 
  const dispach=useDispatch()
  const data=useSelector(state=>state.logData)

const Signup=async()=>{
fetch('https://veera799.herokuapp.com/api/signup',
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
    navigate('/login')
  }
  
})

}


  return (
<div className={style.signupDiv}>

   <div className={style.signupDiv2}>
       <h1>sign up for admin</h1>
       <input onChange={(e) => { dispach({ type: "login", payload: [e.target.name, e.target.value] }) }} type="name" name="name" id="" />
       <input onChange={(e) => { dispach({ type: "login", payload: [e.target.name, e.target.value] }) }} type="password" name="password" id="" />
       <button onClick={()=>{Signup()}}>signup</button>
       <button onClick={()=>{navigate('/login')}} >login</button>

   </div>
</div>
  )
}

export default Signup