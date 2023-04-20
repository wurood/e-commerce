import React from 'react'
import Frame from '../Frame'
import { featuresData } from './data';
import './master.css'
function Features() {
  return (
    <div className='features-section'>
      {
        featuresData.map((e) =>
          <Frame icon = {e.icon} feature={e.feature} desc={e.describtion}/>
        )
      }
    </div>
  )
}

export default Features
