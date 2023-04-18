import {Box } from "@mui/material";
import React from "react";
import { data } from '../../data';
import ProductCard from "../ProductCard";
import Tittle from '../Tittle';
import SubTittle from '../SubTittle';
import Buttons from "../Buttons";
import { createTheme } from "@mui/material/styles";
const Best = () => {
  const theme = createTheme({
    BoxTheme: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom:5,
    },
  });
  return (
  <>
      <Tittle text="This Month" />
      <Box sx={theme.BoxTheme}>
      <SubTittle text="Best Selling product"/>
        <Buttons Color="pink" Text="View All" />
      </Box>
      <Box sx={theme.BoxTheme}>
        {data.map((product, index) =>index < 4 && (<Box key={product.id}><ProductCard{...product} /></Box>))}
      </Box>
   </>
  );
};

export default Best;