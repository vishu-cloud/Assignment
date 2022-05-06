import React from 'react'
import { Container,Accordion, Row, Col, Button } from 'react-bootstrap'
import pp from './me.jpeg'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import ToggleSwitch from './ToggleSwitch'

function Setting() {
  return (
    <Container style={{backgroundColor:"black"}}>
    <Row>
    <Col style={{display:"flex",justifyContent:"start",marginTop:"3%",color:"white"}}>
    <div style={{color:"white",backgroundColor:"black",fontSize:"300%"}}> &lt; &#127;
    <img src = {pp} style={{width:"15%",borderRadius:"80%",height:"90px"}}/>
    &#127;Samuel Doe &#127;<span style={{fontSize:"40%"}}>18BIS1241</span></div>
    </Col>
    <Col style={{display:"flex",marginTop:"4%",justifyContent:"end",color:"white",backgroundColor:"black",padding:"2% 0%"}}>
        <FontAwesomeIcon icon={faPenToSquare}/>&#127; Edit Profile Picture</Col>
    </Row>
    <h1 style={{color:"white",backgroundColor:"black",fontSize:"200%",margin:"4% 0%",fontWeight:"normal"}}>
        General Settings
    </h1>
    <Container style ={{backgroundColor:"rgba(35, 37, 39, 1)"}}>
        <Button style={{width:"100%",padding:"2% 1%",backgroundColor:"rgba(35, 37, 39, 1)",border:"none",borderBottom:"solid",borderColor:"white"}}>
        <Row style ={{backgroundColor:"rgba(35, 37, 39, 1)",color:"white",display:"flex"}}>
            <Col style = {{display:"flex",justifyContent:"start"}}>
            Settings 1
            </Col>
            <Col style = {{display:"flex",justifyContent:"end"}}>V
            </Col>
        </Row>
        </Button>
        <Row style ={{margin:"0% 0.3%",backgroundColor:"rgba(35, 37, 39, 1)",padding:"2% 1%",color:"white",display:"flex",border:"none",borderBottom:"solid",borderColor:"white"}}>
            <Col style = {{display:"flex",justifyContent:"start"}}>
            Settings 2
            </Col>
            <Col style = {{display:"flex",justifyContent:"end"}}>
                <ToggleSwitch/>
            </Col>
        </Row>
        <Row style ={{margin:"0% 0.3%",backgroundColor:"rgba(35, 37, 39, 1)",padding:"2% 1%",color:"white",display:"flex"}}>
            <Col style = {{display:"flex",justifyContent:"start"}}>
            Settings 3
            </Col>
            <Col style = {{display:"flex",justifyContent:"end"}}>
                <ToggleSwitch/>
            </Col>
        </Row>
    </Container>
    <h1 style={{color:"white",backgroundColor:"black",fontSize:"200%",margin:"4% 0%",fontWeight:"normal"}}>
        General Settings
    </h1>
    <Container style ={{backgroundColor:"rgba(35, 37, 39, 1)",marginBottom:"5%"}}>
    <Row style ={{margin:"0% 0.3%",backgroundColor:"rgba(35, 37, 39, 1)",padding:"2% 1%",color:"white",display:"flex",border:"none",borderBottom:"solid",borderColor:"white"}}>
            <Col style = {{display:"flex",justifyContent:"start"}}>
            Settings 1
            </Col>
            <Col style = {{display:"flex",justifyContent:"end", textDecoration:"underline"}}>
                View more
            </Col>
        </Row>
        <Row style ={{margin:"0% 0.3%",backgroundColor:"rgba(35, 37, 39, 1)",padding:"2% 1%",color:"white",display:"flex"}}>
            <Col style = {{display:"flex",justifyContent:"start"}}>
            Settings 2
            </Col>
            <Col style = {{display:"flex",justifyContent:"end"}}>
                <ToggleSwitch/>
            </Col>
        </Row>
    </Container>
    
    </Container>
  )
}

export default Setting