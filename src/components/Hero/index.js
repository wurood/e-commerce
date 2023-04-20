import React from 'react'
import Categories from './Categories/index'
import Carousel  from './Carosal/index'

import style from './style.module.css';

function index() {
  return (
    <div className='wrapper'>
    <Categories />
    <div className={style.divider}></div>
    <Carousel />
    </div>
  )
}

export default index