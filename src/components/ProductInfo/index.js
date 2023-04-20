import React from 'react';
import { Typography, createTheme , Box , Rating } from '@mui/material';
function ProductInfo({ title , rating , price , description }){
  const theme = createTheme({
      RevBoxTheme: {
        width:290,
        display: "flex",
        justifyContent: "space-between",
      },
      CountTheme: {
      display: "flex",
      alignItems: "center",
      opacity: 0.5,
      fontFamily: "Poppins",
      fontSize:12,
      },
      LineTheme: {
          borderLeft:"0.5px solid black",
          paddingLeft: 1,
          color: "#00FF66",
          height:17,
      },
      flexDiv: {
        display: "flex",
          justifyContent: "space-around",
          width: 380,
          flexDirection: "column",
      },
      TitleTheme: {
          fontFamily: "Inter",
          fontSize: 24,
          fontWeight: 600,
          textAlign: "left",
      }
  });
    return (
        <Box sx={theme.flexDiv}>
            <Typography variant="h5" sx={theme.TitleTheme}> {title}</Typography>
            <br/>
          <Box sx={theme.RevBoxTheme}>
            <Rating name="read-only" value={rating.rate} readOnly />
                <Box sx={theme.CountTheme}>({rating.count} Reviewes) </Box>
                <Typography sx={theme.LineTheme}> In Stock</Typography>    
            </Box>
            <br/>
            <Typography variant="h4"> ${price}</Typography>
            <br/>
            <Typography variant="subtitle2" sx={{width:373}}>{description}</Typography>
    </Box>
  );
}
export default ProductInfo