
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';
  
export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 ,color:"#fff"}}> 
    <h3 >loading.....<Spinner animation="border" variant="white" /> <br/></h3>
      

    </div>
  );
}