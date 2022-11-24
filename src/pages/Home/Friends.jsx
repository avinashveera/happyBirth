import React, { useEffect, useState } from 'react'
import FriendCard from '../components/friendCard'

const Friend = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{

  fetch('https://veera799.herokuapp.com/friend/friends',
  {
    method:'GET',
    headers:{
        'Content-Type': 'application/json',
        'token':localStorage.getItem('token')
    },
  }
  ).then(res=>res.json()).then(res=>{
  
    if(res.success===false){
      alert(res.message)
    }else{
 
      setData(res.message)
      
    }
    
  })

   
  },[])

  return (
    <div style={{display:"flex",flexWrap:"wrap",alignContent:"center",margin:"20px"}}>


{
  data.map((arr)=>{

    return(

      <FriendCard 
      name={arr.name}
      phone={arr.phone}
      whatsapp={arr.whatsapp}
      facebook={arr.facebook}
      instagram={arr.instagram}
      key={arr._id}
      birthday={arr.birthday}
      /> 

    )

  })
}

   
   
    
    </div>
  )
}

export default Friend