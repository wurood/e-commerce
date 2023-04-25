import React from 'react';
import { Typography, createTheme } from '@mui/material';
function Tittle({ text }) {
  const theme = createTheme({
    TitleTheme: {
      fontFamily:"Inter",
      fontSize: 36,
      fontWeight: 600,
      letterSpacing: "0.04em",
      color:"black",
    },
    
  });
  return (
    <Typography variant="h5" gutterBottom sx={theme.TitleTheme}> {text} </Typography>
  )
}
export default Tittle
