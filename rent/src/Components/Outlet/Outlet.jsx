import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./outlet.module.css"

const Outlet = () => {
  const navigate = useNavigate()

  const selectScooty = (area)=>{
    localStorage.setItem("area",area)
    navigate("/vehicle")
  }

  return (
    <div>
        <h3>Select your area</h3>
        <div id={style.outlet_container}>
            <div onClick={()=>selectScooty("Vaishali")}>Vaishali</div>
            <div onClick={()=>selectScooty("Raj Nagar Extension")}>Raj Nagar Extension</div>
            <div onClick={()=>selectScooty("Chander Nagar")}>Chander Nagar</div>
            <div onClick={()=>selectScooty("Kavi Nagar")}>Kavi Nagar</div>
            <div onClick={()=>selectScooty("Crossing Republik")}>Crossing Republik</div>
            <div onClick={()=>selectScooty("Rajendra Nagar")}>Rajendra Nagar</div>
        </div>
    </div>
  )
}

export default Outlet