import React from "react";
import { Button, createTheme } from "@mui/material";
const AddToCart = () => {
    const theme = createTheme({
        AddCarttheme:
        {
          width: 270,
          height: 41,
          backgroundColor: "black",
          position: "absolute",
          left: 0,
          top: 209,
          color: "#FFFFFF",
          fontFamily: "Poppins",
          textAlign: "center",
          fontSize: 16,
            fontWeight: 500,
            "&:hover": {
                backgroundColor: "black",
            }
        },
    });
    return (
        <>
            <Button sx={theme.AddCarttheme}>Add To Cart</Button>
        </>
    );
};
export default AddToCart;
