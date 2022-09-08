import React, { useState } from 'react'
import style from "./vehicle.module.css"

let minutes = 1
let seconds = 60

const EachVehicle = (props) => {
    const [book,setbook] = useState("book")
    const [[mins, secs], setTime] = useState([minutes,seconds]);

    const tick = () => {
   
        if (mins === 0 && secs === 0) 
            reset()
        else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };
    
    const reset = () => setTime([parseInt(minutes), parseInt(seconds)]);
    
        
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


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
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
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