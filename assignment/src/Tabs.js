import React from 'react'
import { Button } from 'react-bootstrap'

function Tabs({val}) {
    if(val === '1')
  {return (
    <div style={{color:"white",display:"flex",justifyContent:"center"}}>
        <button  style={{backgroundColor:"white",borderRadius:"45%",marginRight:"1%",width:"6%"}}></button>
        <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
        <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
        <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
    </div>
  )}
  else if(val === "2")
  {
    return (
        <div style={{color:"white",display:"flex",justifyContent:"center"}}>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"45%",marginRight:"1%",width:"6%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
        </div>
      ) 
  }
  else if(val === "3")
  {
    return (
        <div style={{color:"white",display:"flex",justifyContent:"center"}}>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"45%",marginRight:"1%",width:"6%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
        </div>
      )
  }
  else{
    return (
        <div style={{color:"white",display:"flex",justifyContent:"center"}}>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"50%",marginRight:"1%",padding:"1%"}}></button>
            <button  style={{backgroundColor:"white",borderRadius:"45%",marginRight:"1%",width:"6%"}}></button>
        </div>
      )
  }
}

export default Tabs