import React from 'react'
import style from './style.module.css';

function index(props) {
  return (
    <p style={{color: props.color}}  >{props.text}</p>
  )
}

export default index