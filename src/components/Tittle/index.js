import React from 'react'
import style from './style.module.css';

function index(props) {
  return (
    <h3 className={style.text}>{props.text}</h3>
  )
}

export default index