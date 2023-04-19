import React from 'react'
import style from './style.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Paragraph from '../../Paragraph/index';

function index() {
  return (
    <div className={style.categories}>
        <ul>
            <li><Paragraph text="Woman’s Fashion" color='black' /> <ArrowForwardIosIcon sx={{ fontSize:'12px' ,textAlign:'center'}}/></li>
            <li><Paragraph text="Men’s Fashion "  color='black' /><ArrowForwardIosIcon sx={{ fontSize:'12px' ,textAlign:'center'}}/></li>
            <li><Paragraph text="Home & Lifestyle"  color='black'/></li>
            <li><Paragraph text="Medicine"  color='black' /></li>
            <li><Paragraph text="Sports & Outdoor"  color='black'/></li>
            <li><Paragraph text="Baby’s & Toys"  color='black'/></li>
            <li><Paragraph text="Groceries & Pets"  color='black'/></li>
            <li><Paragraph text="Health & Beauty"  color='black'/></li>
        </ul>
    </div>
  )
}

export default index