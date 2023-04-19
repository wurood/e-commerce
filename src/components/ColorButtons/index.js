import React from 'react'
import style from './style.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { borderColor } from '@mui/system';
import ButtonGroup from '@mui/material/ButtonGroup';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CircleIcon from '@mui/icons-material/Circle';
function index() {
  return (
    <div className={style.wrapper} >
   <div className={style.first}>
    <span>Colours:</span> 
    <CircleIcon style={{fill: "#A0BCE0"}} />
    <CircleIcon style={{fill: "#DB4444"}} />
    </div>
   <Stack spacing={2} direction="row">
   <div className={style.first}><span>Size:</span></div>
   <Button variant="outlined" style={{ minWidth: 30,fontSize:'12px', borderColor:'#828282',color:'black'}}  sx={{m: 0, p: 0}}>XS</Button>
      <Button variant="outlined" style={{ minWidth: 30,fontSize:'12px' , borderColor:'#828282',color:'black'}}  sx={{m: 0, p: 0}}>S</Button>
      <Button variant="contained" style={{ minWidth: 30,fontSize:'12px' ,background:'#DB4444' }}  sx={{m: 0, p: 0}}>M</Button>
      <Button variant="outlined" style={{ minWidth: 30,fontSize:'12px', borderColor:'#828282',color:'black' }}  sx={{m: 0, p: 0}}>L</Button>
      <Button variant="outlined" style={{ minWidth: 30,fontSize:'12px', borderColor:'#828282',color:'black' }}  sx={{m: 0, p: 0}}>XL</Button>
    </Stack>

 

    <Stack spacing={2} direction="row">
    <ButtonGroup  aria-label="outlined primary button group">
      <Button variant="outlined" style={{ minWidth: 40,fontSize:'24px', borderColor:'#828282',color:'black'}} sx={{m: 0, p: 0}}>-</Button>
      <Button variant="outlined" style={{ minWidth: 70,borderColor:'#828282',color:'black' }} >2</Button>
      <Button variant="contained" style={{ minWidth: 40,fontSize:'24px', borderColor:'#828282',color:'white' ,background:'#DB4444'}} sx={{m: 0, p: 0}}>+</Button>
    </ButtonGroup>
      <Button variant="contained" style={{ minWidth: 150,fontSize:'14px',background:'#DB4444',color:'white'}}  sx={{m: 0, p: 1}}>Buy Now</Button>
      <Button variant="outlined" style={{ minWidth: 40,fontSize:'12px' , borderColor:'#828282',color:'black'}}  sx={{m: 0, p: 0}}><FavoriteBorderOutlinedIcon /></Button>
    </Stack>
    {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup> */}
   <div className={style.third}></div>
   </div>
  )
}

export default index