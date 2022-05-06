import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import pic from './undraw_Dev_focus_re_6iwt 1.png'
import { Link } from 'react-router-dom';
import Tabs from './Tabs';

function Onboard2() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"black"}}>
        <Col xs = {11} lg = {8} xl= {8} md = {8} style={{backgroundColor:"rgba(35, 37, 39, 1)",padding:"3%",width:"95%",marginTop:"5%",marginBottom:"1%",maxWidth:"450px"}}>
        <div style={{display:"flex",justifyContent:"center",color:"white"}}>
           <img src={pic} style = {{width:"80%",marginBottom:"20%",marginTop:"8%"}}/>
        </div>
        <div >
        <p style={{textAlign:"center",color:"white",fontSize:"120%"}}>CUSTOMISE YOUR ASSESSMENT AND PROCTORING NEEDS</p>
        <Link to= '/onboard3' style={{margin:"10% 5%",display:"flex",justifyContent:"center",textDecoration:"none"}}><Button style={{color:"white",backgroundColor:"rgba(35, 37, 39, 1)",fontWeight:"bold",padding:"3% 7%",border:"none"}}>Continue &gt;</Button></Link>
        </div>
        <Tabs  val = "2"/>
        </Col>
        </div>
        <Link to= '/dashboard' style={{textDecoration:"none"}}><div style={{color:"rgba(255, 255, 255, 0.5)",backgroundColor:"black",textAlign:"center"}}>Skip</div></Link>
        </div>
  )
}

export default Onboard2