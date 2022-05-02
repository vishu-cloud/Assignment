import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import pic from './logo.jpeg'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"black"}}>
        <Col xs = {11} lg = {8} xl= {8} md = {8} style={{backgroundColor:"rgba(35, 37, 39, 1)",padding:"3%",width:"95%",marginTop:"5%",marginBottom:"5%",maxWidth:"450px"}}>
        <div style={{display:"flex",justifyContent:"center",color:"white"}}>
           <img src={pic} style = {{width:"40%",marginBottom:"10%"}}/>
        </div>
        <div >
        <Form style={{margin:"4% 10%"}} >
            <input placeholder='Username' style={{width:"90%",margin:"5% 2%",backgroundColor:"rgba(35, 37, 39, 1)",borderStyle:"none",borderBottom:"solid",borderColor:"whitesmoke"}}/>
            <input placeholder='Password' style={{width:"90%",margin:"5% 2%",backgroundColor:"rgba(35, 37, 39, 1)",borderStyle:"none",borderBottom:"solid",borderColor:"whitesmoke"}}/>
        </Form>
        <p style={{textAlign:"center",color:"white",fontSize:"70%",textDecoration:"underline"}}>Reset Password From default/Forgot Password</p>
        <Link to= '/login' style={{margin:"15% 5%",display:"flex",justifyContent:"center",textDecoration:"none"}}><Button style={{color:"black",backgroundColor:"white",fontWeight:"bold",padding:"3% 7%"}}>Log In</Button></Link>
        </div>
        </Col>
        </div>
    )
}

export default Login