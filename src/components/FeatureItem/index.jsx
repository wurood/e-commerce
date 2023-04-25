import React from 'react'
import { Typography } from '@mui/material'
import './master.css'

function FeatureItem({icon,feature,desc}) {
  return (
    <div className='feature-item-container'> 
      <div className='big-circle'>
        <div className='small-circle'>
          {icon}
        </div>
      </div>
      <Typography variant='h3' sx={{width:"400px"}}>{feature}</Typography>
      <p>{desc}</p>
    </div>
    
  )
}

export default FeatureItem
