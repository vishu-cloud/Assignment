import React from "react";
import { Container,Accordion, Row, Col, Button } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import {AiOutlineCheck} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import pp from './me.jpeg'
import {Link} from 'react-router-dom'

function Check() {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between">
        <div className="my-3 text-white d-flex align-items-center">
          <BiArrowBack color="white" fontSize="30" />
          <h5 className="pt-3 mx-3">Graduate Record Examination</h5>
        </div>

        <div className="text-white d-flex flex-column py-3">
          <h3 className="my-0"> 17'th Dec 2020 </h3>
          <p> 9 a.m. to 12 p.m. </p>
        </div>
      </div>

      <div className='mx-4 d-flex' style={{height:"500px"}}  >
        <img height="500px" width='600px' src={pp} alt='photo' />

        <div className='mx-5'  >
            <span className='d-flex mb-3 align-items-center' >
              <AiOutlineCheck color='green' fontSize="40" />
              <p className='text-white' style={{marginLeft:"10px"}} >lorme an djfkj</p>
            </span>
            <span className='d-flex mb-3 align-items-center' >
              <AiOutlineCheck color='green' fontSize="40" />
              <p className='text-white' style={{marginLeft:"10px"}} >lorme an djfkj</p>
            </span>
            <span className='d-flex mb-3 align-items-center' >
              <AiOutlineCheck color='green' fontSize="40" />
              <p className='text-white' style={{marginLeft:"10px"}} >lorme an djfkj</p>
            </span>
            <span className='d-flex mb-3 align-items-center' >
              <ImCross color='red' fontSize="30" />
              <p className='text-white' style={{marginLeft:"10px"}} >lorme an djfkj</p>
            </span>
            <span className='d-flex mb-3 align-items-center' >
              <ImCross color='red' fontSize="30" />
              <p className='text-white' style={{marginLeft:"10px"}} >lorme fag ga an djfkj</p>
            </span>
            <span className='d-flex mb-3 align-items-center' >
              <AiOutlineCheck color='green' fontSize="40" />
              <p className='text-white' style={{marginLeft:"10px"}} >lorme an djfkj</p>
            </span>
            <span className='d-flex mb-3 align-items-center' >
              <AiOutlineLoading3Quarters color='gray' fontSize="40" />
              <p className='text-white' style={{marginLeft:"10px"}} >lormegagavacscd an djfkj</p>
            </span>
            <span className='d-flex mb-3 align-items-center' >
              <AiOutlineLoading3Quarters color='gray' fontSize="40" />
              <p className='text-white' style={{marginLeft:"10px"}} >lorme an djfkj ffasg</p>
            </span>
         <Link to="./exam"><Button variant='light' className='px-4 py-2' > Start Exam </Button></Link> 
          </div>
      </div>
      <Row style={{marginTop:"2%"}}>
  <Col style={{color:"white",textDecoration:"underline"}}></Col>
  <Col style={{color:"white",display:"flex",justifyContent:"end"}}> 
  <Col >
  <div style={{textAlign:"end"}}>Samuel Doe</div>
  <div style={{color:"rgba(255, 255, 255, 0.5)",textAlign:"end"}}>18BIS1241</div>
  </Col>
  <Link to= "/setting"><img src = {pp} style={{width:"50px",marginLeft:"1%",borderRadius:"50%"}}/></Link>
  </Col>
</Row>
    </Container>
  );
}

export default Check;




