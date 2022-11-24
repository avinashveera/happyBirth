import React, { useEffect } from 'react'
import Card from '../components/Card'
import Spinner from '../style/Spiner'
import Header from "../components/Header";


const Homepage = () => {
  const style={
    listsData:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexWrap:"wrap"
    }
  }


  return (
<>
<Header/>
<div style={style.listsData}>

<Card
text="All friends"
addr="/friends"
/>

<Card
text="birthday on this month"
addr="/month"
/>

<Card
text="add friend"
addr="/addfriend"
/>
<Card
text="past birthday"
addr="/past"
/>

<Card
text="upcoming birthday"
addr="/upcoming"
/>





</div>

</>
  )
}

export default Homepage