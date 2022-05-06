import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faMinus} from '@fortawesome/free-solid-svg-icons'
import { faSquareFull,} from '@fortawesome/free-regular-svg-icons'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Container fluid>
       <Row style={{display:"flex",justifyContent:"space-between",backgroundColor:"rgba(35, 37, 39, 1)",padding:"1%"}}>
        <Col style={{color:"white",fontSize:"120%"}}>
        <Link to= '/' style={{color:"white",textDecoration:"none"}}><div>Proctor Vision</div></Link>
        </Col>
        <Col >
        <input placeholder= "&#xF002; Search" style={{fontFamily:"FontAwesome",backgroundColor:"rgba(19, 20, 21, 1)",borderStyle:"none",width:"30vw",height:"99%"}}/>
        </Col>
        <Col style={{color:"white",display:"flex",justifyContent:"end"}}>
            <FontAwesomeIcon icon={faMinus} style={{marginRight:"10px"}}/>
            <FontAwesomeIcon icon={faSquareFull } style={{marginRight:"10px"}}/>
            <FontAwesomeIcon icon={faXmark}/>
        </Col>
        </Row> 
    </Container>
  )
}//

export default Navbar