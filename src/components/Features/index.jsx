import React from 'react'
import FeatureItem from '../FeatureItem'
import { featuresData } from './data';
import './master.css'
function Features() {
  return (
    <div className='features-section'>
      {
        featuresData.map((e) =>
          <FeatureItem icon = {e.icon} feature={e.feature} desc={e.describtion}/>
        )
      }

    </div>
  )
}

export default Features
