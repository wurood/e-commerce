import React from 'react'
import {Link, Typography} from '@mui/material';
import './master.css'
function Card({img,title,desc}) {
  return (
    <div  className='card'>
      <img src={img} alt={title}/>
      <div className='info-container'>
        <Typography variant="h3">
          {title}
        </Typography>

        <p>{desc}</p>

      </div>
      <Link href="#" underline="none">Shop now</Link>
    </div>
  )
}

export default Card
