import React from 'react'
import './master.css'

function Frame({icon,feature,desc}) {
  return (
    <div className='frame-container'> 
      <div className='big-circle'>
        <div className='small-circle'>
          {icon}
        </div>
      </div>
      <h4>{feature}</h4>
      <p>{desc}</p>
    </div>
    
  )
}

export default Frame
