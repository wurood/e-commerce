import React , {createRef} from 'react';
import { data } from '../../data';
import Tittle from '../Tittle';
import SubTittle from '../SubTittle/index';
import ProductCard from '../ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Buttons from '../Buttons';
import { Box , Avatar } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Explore() {
     const customeSlider = createRef();
     const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 2,
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
        <Tittle text="Our Products" />
        <Box sx={theme.TitleTheme}>
          <SubTittle text="Explore Our Products" />
          <Box sx={theme.TitleTheme}>
          <Avatar sx={theme.IconBackgroundColor} onClick={() => gotoPrev()}>
              <ArrowBackIcon sx={{ color:"black" }}/>
          </Avatar>
          <Avatar sx={theme.IconBackgroundColor} onClick={() => gotoNext()}>
              <ArrowForwardIcon sx={{ color:"black" }}/>
          </Avatar>
           </Box>
        </Box>
        <Slider {...settings}  ref={customeSlider}>
          {data.map((product) => (
            <ProductCard {...product} key={product.id} ExpComp={true} />))
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
export default Explore;