import React from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
const Buttons = ({Text,Color}) => {
  const theme = createTheme({
    PinkButton: {
      backgroundColor: "#DB4444",
      height:56,
      border: "none",
      color: "#FAFAFA",
      padding: " 16px 48px 16px 48px",
      fontSize: 16,
    },
    GreenButton: {
      backgroundColor: "#00FF66",
      border: "none",
      color: "#FAFAFA",
      padding: " 16px 48px 16px 48px",
      fontSize: 16,
    }
  });

  return (
    <>
      <Button
        variant="contained"
        sx={Color === "pink" ? theme.PinkButton : theme.GreenButton}>
        {Text}
      </Button>
    </>
  );
};
export default Buttons;