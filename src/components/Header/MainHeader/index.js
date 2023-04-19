import React from 'react'
import style from './style.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function index() {
  const [Language, setLanguages] = React.useState('');

  const handleChange = (event) => {
    setLanguages(event.target.value );
  };
  return (
    <div className={style.mainHeader}>
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<a>ShopNow</a></p>
      <div className={style.dropMenu}>
      <Box sx={{ minWidth: 20, alignItems:'center',color:'white'}} >
        <FormControl fullWidth  sx={{ color:'white',textAlign:'center',padding:'0px'}} >
          <InputLabel id="demo-simple-select-label" sx={{ color:'white',textAlign:'center',fontFamily:'Poppins'}}>English</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Language}
            label="Language"
            onChange={handleChange}
            sx={{ color:'white',boxShadow: 'none',outline: 'none !important',fontFamily:'Poppins',
                 '& .MuiOutlinedInput-notchedOutline': { border: 0 ,color: 'white'},          
                 '& .MuiSvgIcon-root': { color: 'white'}
                }}
          >
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>Arabic</MenuItem>
            <MenuItem value={30}>Turkish</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </div>
    </div>
  )
}
