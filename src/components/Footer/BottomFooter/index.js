import React from 'react'
import style from './style.module.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

function index() {
  return (
    <div class={style.wrapper}>
        <p><CopyrightIcon sx={{position:'relative',top:'6px',right:'5px'}}/>Copyright Rimel 2022. All right reserved</p>
    </div>
  )
}

export default index