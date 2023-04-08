import React from 'react'
import style from './style.module.css';

function index(props) {
  return (
    <h1 className={style.text}>{props.text}</h1>
  )
}

export default index