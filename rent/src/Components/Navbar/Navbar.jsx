import React from 'react'
import style from "./Navbar.module.css"
import LocationOn from '@mui/icons-material/LocationOn';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div id={style.navbar_container}>
        <div className={style.navbar_container_div}>
            <div>
              <h3 style={{fontSize:"30px",marginTop:"5px"}}>
                <Link to="/">Scooty_Rental</Link>
              </h3>
            </div>
            <div>
                <div id={style.location}>
                  <LocationOn/>
                  <p> Ghaziabad</p>
                </div>
            </div>
        </div>
        <div className={style.navbar_container_div}>
            <div>
                <p>
                <Link to="/">Home</Link>
                </p>
            </div>
            <div>
               <p>About Us</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar