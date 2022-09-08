import React from 'react'
import style from "./vehicle.module.css"
import data from "../../data.json"
import EachVehicle from './EachVehicle'

const Vehicle = () => {
    let area = localStorage.getItem("area")
    
  return (
    <div className={style.vehicle}>
        <h2>Scooty available in {area}</h2>
        <div className={style.vehicle_container}>
           {data.vehicle.map((el)=>(
            <EachVehicle key={el.id} {...el}/>
           ))}
        </div>
    </div>
  )
}

export default Vehicle