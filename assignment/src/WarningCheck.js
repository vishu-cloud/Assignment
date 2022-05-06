//import "./styles.css";
import { Button, Container,Pagination } from "react-bootstrap";
import { BiTimeFive } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import {AiFillBackward,AiFillForward} from 'react-icons/ai'
import pic1 from './warning message.png'
import pic2 from './yellow warning.png'
import pic3 from './red warning.png'

export default function WarningCheck() {
  return (
    <Container className="App">
      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center justify-content-center">
          <BiTimeFive color="white" />
          <span className="text-white mx-2">01:33:33</span>
        </div>
        <div>
          <Button variant="light mx-2"> Exit </Button>
          <Button variant="light"> Submit </Button>
        </div>
      </div>

      <h5 className="text-white my-3">Question 1</h5>

      <div className="w-100 d-flex ">
        <div >
          <div
            className="text-white px-3 py-3"
            style={{ height: "300px", width: "900px" ,backgroundColor:"rgba(35, 37, 39, 1)"}}
          >
            <div style={{backgroundColor:"rgba(35, 37, 39, 1)"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit in id diam tortor. Volutpat ipsum accumsan ut euismod pulvinar ut placerat gravida. Dolor velit sed non in semper. Enim etiam sem nunc fermentum sollicitudin tellus. Sagittis cum nec justo leo semper ut sollicitudin. Gravida pellentesque dis.</div>
            <img
              className="mt-3"
              height="150px"
              width="150px"
              src="https://jvm-gaming.org/uploads/default/original/2X/9/91d930a52c6eb2652f74b4c10b294428deac31c6.jpeg"
              alt="photo"
            />
          </div>

          <div
            className="my-3  text-white"
            style={{ width: "900px", height: "30px" ,backgroundColor:"rgba(35, 37, 39, 1)"}}
          >
            <BsCircle color="white" className=" mx-3"  style={{backgroundColor:"rgba(35, 37, 39, 1)"}}/>
            lorem ipsum
          </div>
          <div
            className="my-3 text-white"
            style={{ width: "900px", height: "30px" ,backgroundColor:"rgba(35, 37, 39, 1)"}}
          >
            <BsCircle color="white" className=" mx-3"  style={{backgroundColor:"white",borderRadius:"50%"}}/>
            lorem ipsum
          </div>

          <div
            className="my-3 text-white"
            style={{ width: "900px", height: "30px" ,backgroundColor:"rgba(35, 37, 39, 1)"}}
          >
            <BsCircle color="white" className="mx-3"  style={{backgroundColor:"rgba(35, 37, 39, 1)"}}/>
            lorem ipsum
          </div>

          <div
            className="my-3 text-white"
            style={{ width: "900px", height: "30px",backgroundColor:"rgba(35, 37, 39, 1)" }}
          >
            <BsCircle color="white" className=" mx-3"  style={{backgroundColor:"rgba(35, 37, 39, 1)"}}/>
            lorem ipsum
          </div>

        </div>

        <div >
          <div style={{marginLeft:"20px"}}>
            <Button className='mx-2' variant="light" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="success" >1</Button>
            <Button className='mx-2' variant="danger" >1</Button>
            <Button className='mx-2' variant="danger" >1</Button>
          </div>
          <div className="mt-3" style={{marginLeft:"20px"}}>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
          </div>
          <div  className="mt-3" style={{marginLeft:"20px"}}>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
          </div>
          <div  className="mt-3" style={{marginLeft:"20px"}}>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
            <Button className='mx-2' variant="secondary" >1</Button>
          </div>

          <div className="d-flex align-items-center my-3" style={{marginLeft:"20px"}}>
              <AiFillBackward  color='white' />
              <Button className='mx-2 px-1 py-1' variant="secondary" >1</Button>
              <Button className='mx-2 px-1 py-1' variant="secondary" >2</Button>
              <Button className='mx-2 px-1 py-1' variant="secondary" >3</Button>
              <AiFillForward color="white" />

            </div>

            <div className='d-flex align-items-center justify-content-evenly'>
              <Button  variant='light' disabled className='px-4' >
              <AiFillBackward className='bg-white mx-1'/>previous</Button>
              <Button variant='light' className='px-4' >
                next       <AiFillForward className='bg-light' color="black" /></Button>
              </div>
              
              <img src = {pic1} style = {{width:"90%",marginTop:"4%"}}/>
                <img src = {pic2} style = {{width:"90%",marginTop:"4%"}}/>
                <img src = {pic3} style = {{width:"90%",marginTop:"4%"}}/>
                </div>
      </div>
    </Container>
  );
}


