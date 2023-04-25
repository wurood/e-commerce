import React , {useState} from "react";
import { CardMedia,Typography, Avatar, Card, Box, Rating, CardContent , Button ,Stack } from "@mui/material";
import AddToCart from '../AddToCart';
import CircleIcon from '@mui/icons-material/Circle';
import { createTheme } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
const ProductCard = ({ image, title, rating, price, Discount ,ExpComp, Itemcolor ,id }) => {
  const [showBtn, setShowBtn] = useState(false);
  const theme = createTheme({
  CardTheme: {
    boxShadow: "none",
    width: 270,
    position: "relative",
    height: 350,
  },
   CountTheme: {
      opacity: 0.5,
      fontFamily: "Poppins",
      fontSize:12,
    },
   DescriptionTheme: {
      fontFamily: "Poppins",
      fontWight: "500",
      fontSize: "16px",
      lineHight: "24px",
  },
   flexDiv: {
      display: "flex",
      width: 80,
      height: 24,
      justifyContent: "space-between",
      padding:0,
      margin: 0,
    },
    AfterDiscountTheme: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 16,
      color: "#DB4444",
    },
    BeforeDiscountTheme: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: 16,
      paddingLeft:1,
      textDecorationLine: "line-through",
      opacity: 0.5,
    },
  ContainerTheme: {
    width: 270,
    height: 250,
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  DiscountTheme: {
    width: 55,
    height: 26,
    backgroundColor: "#DB4444",
    borderRadius: 1,
    top: 10,
    left: 11,
    fontSize: 12,
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 500,
  },
  IconsTheme: {
    display: "inline-block",
    position: "absolute",
    left: 220,
    top: 12,
  },
});
  return (
      <Card sx={theme.CardTheme} >
        <Box sx={theme.ContainerTheme} onMouseEnter={() => setShowBtn(true)} onMouseLeave={() => setShowBtn(false)} >
        {Discount && <Box sx={theme.DiscountTheme}>- 40%</Box>}
          <Box sx={theme.IconsTheme}>
            <Box>
              <Avatar sx={{ backgroundColor: "#FFFFFF"}}>
                <FavoriteBorderIcon style={{ color: "black" }} />
              </Avatar>
            </Box>
            <Box>
              <Avatar sx={{ backgroundColor: "#FFFFFF"}}>
                <VisibilityOutlinedIcon style={{ color: "black" }} />
              </Avatar>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{height: 170,width: 150,alignItems: "center", display: "flex",}}
            image={image}
        />
        {showBtn && <AddToCart id={id} />}
      </Box>
        <CardContent sx={{ padding: "16px 0 0 0"}}>
          <Typography variant="h6" sx={theme.DescriptionTheme}>
            {title}
        </Typography>
        {ExpComp ? (
        <>
          <Box sx={theme.flexDiv}>
            <Typography sx={theme.AfterDiscountTheme}>
              ${price}
            </Typography>
              <Rating name="read-only" value={rating.rate} sx={{ paddingLeft: 1  }}  size="small" readOnly />
            <Box sx={theme.CountTheme}>({rating.count})</Box>
            </Box>
            {Itemcolor && (
              <Stack spacing={0} direction="row">
                <Button><CircleIcon sx={{ color:Itemcolor.first }}/></Button>
                <Button><CircleIcon sx={{ color:Itemcolor.second}}/></Button>
              </Stack>)}
          </>) : (<>
          <Box sx={theme.flexDiv}>
            <Typography sx={theme.AfterDiscountTheme}>
              ${price}
            </Typography>
            <Box sx={theme.BeforeDiscountTheme}>
              $160
            </Box>   
          </Box>
          <Box sx={theme.flexDiv}>
            <Rating name="read-only" value={rating.rate} readOnly  size="small"/>
            <Box sx={theme.CountTheme}>({rating.count})</Box>
          </Box></>) }
        </CardContent>
      </Card>
  );
};
export default ProductCard;