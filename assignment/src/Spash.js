import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import pic from './logo.jpeg'
import { Link } from 'react-router-dom';

function Spash() {
  return (
<div style={{display:"flex",justifyContent:"center",backgroundColor:"black"}}>
<Col xs = {11} lg = {8} xl= {8} md = {8} style={{backgroundColor:"rgba(35, 37, 39, 1)",padding:"3%",width:"95%",marginTop:"5%",paddingRight:"10%",marginBottom:"5%",maxWidth:"800px"}}>
<div style={{color:"white"}}>
   <img src={pic} style = {{width:"50%"}}/>
</div>
<div >
<div style={{color:"white",fontFamily: 'Poppins',fontStyle: 'normal',fontSize: '3rem',marginBottom:"5%"}}>
Welcome aboard to the future in the making you’ve just become a part of it</div>
<Link to= '/login'><Button style={{color:"black",backgroundColor:"white",fontWeight:"bold",padding:"1% 3%"}}>Continue &gt;</Button></Link>
</div>
</Col>
</div>
  )
}

export default Spash