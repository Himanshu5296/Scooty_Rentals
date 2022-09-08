import React, { useState } from 'react'
import style from "./vehicle.module.css"

const EachVehicle = (props) => {
    const [book,setbook] = useState("book")
    const [countdown] = useState(2)
  return (
    <div className={style.eachVehicleDetaile}> 
       <img src={props.image} alt="" />
       <h2>{props.name}</h2>
       <p>{props.type}</p>
       {book==="book" ? (
        <button onClick={()=>setbook("pick")}>Book</button>
        ) : book==="pick" ? 
        (
            <>
            <p>{countdown}</p>
            <button onClick={()=>setbook("booked")}>Pick</button>
            </>
        ): book==="booked" ? (
            <>
            <p>You can travel max 10 kms and put it in Bus-Stop Station</p>
            <button style={{backgroundColor:"green"}}>Booked</button> 
            </>
        ) : (
            <div></div>
        ) }
    </div>
  )
}

export default EachVehicle