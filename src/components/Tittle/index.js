import React from 'react'
import style from './style.module.css';

function index(props) {
  return (
    <h1 style={{color: props.color}} >{props.text}</h1>
  )
}

export default index