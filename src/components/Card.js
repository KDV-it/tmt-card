import React from 'react'
import { Link, useLocation, useParam } from 'react-router-dom'
import frontCard from '../img/front-thiep.jpg'; 

import './Card.css';


const Card = () => {
  let location = useLocation();
  console.log(location);
  let query = new URLSearchParams(location.search);
  let name = query.get("name");
  let gender = query.get("gender") === "Nam" ? "Anh" : "Chị";
  return (
    <>
      <div>{name} and {gender}</div>
      <Link to={"/"} >Come back home!</Link>

      <div className="card">
        <div className='front-card'>
          <img src={frontCard} alt="" />
        </div>

        <div className='content-card'>

        </div>
      </div>
    </>
  )
}

export default Card