import React from 'react'
import BottomFooter from './BottomFooter/index'
import UpFooter from './UpFooter/index'
import style from './style.module.css';

function index() {
  return (
    <div className={style.wrapper}>
    <UpFooter />
    <BottomFooter />
    </div>
  )
}

export default index