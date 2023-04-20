import React from "react";
import { Box, createTheme , Typography} from "@mui/material";
const SubTittle = ({text}) => {
  const theme = createTheme({
    TitleTagTheme: {
      width: "20px",
      height: "40px",
      backgroundColor: "#DB4444",
      borderRadius: "4px",
      marginTop: "90px",
      marginBottom: 2,
    },
    TitleTheme: {
      color: "#DB4444",
      width:100,
      mt:5,
      paddingTop: 1,
      marginLeft: "50px",
    },
  });
  return (
    <>
      <Box sx={theme.TitleTagTheme}>
        <Typography variant="caption" display="block" gutterBottom sx={theme.TitleTheme}> {text} </Typography>
      </Box>
    </>
  );
};


export default SubTittle;
