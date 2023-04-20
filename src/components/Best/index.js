import {Box , Grid} from "@mui/material";
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
      marginBottom:3,
    },
  });
  return (
  <>
      <Tittle text="This Month" />
      <Box sx={theme.BoxTheme}>
      <SubTittle text="Best Selling product"/>
        <Buttons Color="pink" Text="View All" />
      </Box>
      <Grid container>
        {data.map((product, index) =>index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}> <ProductCard {...product} /> </Grid>))}
      </Grid>
   </>
  );
};
export default Best;