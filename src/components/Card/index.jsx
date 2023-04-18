import React from 'react'
import path from '../../assests/perfume.png'
import './master.css'
function Card({img,title,desc}) {
  return (
    <div  className='card'>
      <img src={img} alt={title}/>
      <div className='info-container'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <a href="#">Shop now</a>
    </div>
  )
}

export default Card
