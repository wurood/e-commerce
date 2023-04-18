import React from 'react';
import { createRef } from 'react';
import { data } from '../../data';
import Tittle from '../Tittle';
import Clock from '../Clock';
import SubTittle from '../SubTittle/index';
import ProductCard from '../ProductCard';
import { Box , Avatar } from "@mui/material";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Buttons from '../Buttons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function FlashSales() {
    const customeSlider = createRef();
      const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
        initialSlide: 0,
      responsive: [
        {
          breakpoint: 1042,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
  };
   const theme = createTheme({
     TitleTheme: {
      display: "flex",
      justifyContent: "space-between",
     },
     IconBackgroundColor: {
       backgroundColor: "#F5F5F5",
       width: 46,
       height:46,
     },
  });
  const gotoNext = () => {
    customeSlider.current.slickNext()
  }
  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }
    return (
      <>
        <Tittle text="Today's" />
        <Box sx={theme.TitleTheme}>
          <SubTittle text="Flash Sales" />
          <Clock /> 
          <Box sx={theme.TitleTheme}>
          <Avatar sx={theme.IconBackgroundColor} onClick={() => gotoPrev()}>
              <ArrowBackIcon sx={{ color:"black" }}/>
          </Avatar>
          <Avatar sx={theme.IconBackgroundColor} onClick={() => gotoNext()}>
              <ArrowForwardIcon sx={{ color:"black" }}/>
          </Avatar>
           </Box>
        </Box>
          <Slider {...settings} ref={customeSlider}>
                {data.map((product) => (
                  <ProductCard {...product} Discount={true} key={product.id}  />))
                }
        </Slider>
        <Box
          m={3}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Buttons Color="pink" Text="View all products" />
        </Box>
    </>
  );
}
export default FlashSales;