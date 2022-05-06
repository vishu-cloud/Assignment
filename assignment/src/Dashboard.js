import React from 'react'
import { Container,Accordion, Row, Col, Button } from 'react-bootstrap'
import pp from './me.jpeg'
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <Container style={{backgroundColor:"black"}}>
    <h1 style={{color:"white",backgroundColor:"black",padding:"2% 0%"}}>My Classes</h1>
    <Accordion defaultActiveKey="1" variant="dark">
  <Accordion.Item  variant="dark" eventKey="0" style={{backgroundColor:"rgba(35, 37, 39, 1)",marginBottom:"2%"}}>
    <Accordion.Header className= "bg-dark" style={{backgroundColor:"rgba(35, 37, 39, 1)",color:"white"}}>Neural Networks and Fuzzy Control
    </Accordion.Header>
    <p style={{backgroundColor:"rgba(35, 37, 39, 1)",color:"rgba(255, 255, 255, 0.5)",fontSize:"70%",marginLeft:"2%"}}>CSE3013</p>
    <Accordion.Body variant="dark">
      Lorem ipsum dolor sit amet
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1"  style={{backgroundColor:"rgba(35, 37, 39, 1)",marginBottom:"2%"}}>
    <Accordion.Header style={{backgroundColor:"rgba(35, 37, 39, 1)",color:"white"}}>IOT System Architecture</Accordion.Header>
    <p style={{color:"rgba(255, 255, 255, 0.5)",fontSize:"70%",marginLeft:"2%"}}>ECE1029</p>
    <Accordion.Body>
      <Row style={{paddingTop:"1%",marginBottom:"1%",paddingBottom:"0.5%",display:"flex",justifyContent:"space-around",backgroundColor:"rgba(72, 76, 80, 1)",color:"white"}}>
        <Col>CAT 1</Col>
        <Col>22nd Dec 2020 . 9:00 am - 12:00 pm </Col>
        <Col>
          <div  style={{display:"flex",justifyContent:"end"}}><Button disabled style={{padding:"2%",color:"black",backgroundColor:"white"}}><b>Completed</b> </Button></div></Col>
      </Row>
      <Row style={{paddingTop:"1%",marginBottom:"1%",paddingBottom:"0.5%",display:"flex",justifyContent:"space-around",backgroundColor:"rgba(72, 76, 80, 1)",color:"white"}}>
        <Col>CAT 2</Col>
        <Col>12th Jan 2021 . 9:00 am - 12:00 pm  </Col>
        <Col>
          <div  style={{display:"flex",justifyContent:"end"}}><Link to = './Check' style={{padding:"0.6% 1.3%",color:"black",backgroundColor:"white"}}><Button style={{border:"none",color:"black",backgroundColor:"white"}}><b>Join Test</b> </Button></Link></div></Col>
      </Row>
      <Row style={{paddingTop:"1%",marginBottom:"1%",paddingBottom:"0.5%",display:"flex",justifyContent:"space-around",backgroundColor:"rgba(72, 76, 80, 1)",color:"white"}}>
        <Col>CAT 3</Col>
        <Col>22nd Mar 2021 . 9:00 am - 12:00 pm </Col>
        <Col>
          <div  style={{display:"flex",justifyContent:"end"}}><Button disabled style={{padding:"2%",color:"black",backgroundColor:"white"}}><b>Yet to Start</b> </Button></div></Col>
      </Row>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Row>
  <Col style={{color:"white",textDecoration:"underline"}}>Take Demo Exam</Col>
  <Col style={{color:"white",display:"flex",justifyContent:"end"}}> 
  <Col >
  <div style={{textAlign:"end"}}>Samuel Doe</div>
  <div style={{color:"rgba(255, 255, 255, 0.5)",textAlign:"end"}}>18BIS1241</div>
  </Col>
  <Link to= "/setting"><img src = {pp} style={{width:"50px",marginLeft:"1%",borderRadius:"50%"}}/></Link>
  </Col>
</Row>
    </Container>
  )
}

export default Dashboard