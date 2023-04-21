import React from 'react'
import SubTitle from '../SubTittle'
import Title from '../Tittle'
import Card from '../Card'
import {newArrivalData} from './data.js'
import './master.css'

function NewArrival() {
  return (
    <div className='new-arrival-container'>
      <SubTitle text="Featured"/>
      <Title text="New Arrival"/>
      <div className='skeleton-container'>
        {
          newArrivalData[0].map((item)=>
            <Card img={item.img} title={item.title} desc={item.describtion}/>
          )
        }
        
        <div className='inner-card-container'>
          {
            newArrivalData[1].map((item)=>
            <Card img={item.img} title={item.title} desc={item.describtion}/>
          )
          }
        </div>
        
      </div>
    </div>
  )
}

export default NewArrival
