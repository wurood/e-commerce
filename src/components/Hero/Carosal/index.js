import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AppleIcon from '@mui/icons-material/Apple';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img from '../../../Assets/slider_img.jpg'
import './style.css';

function index() {
        return (
            <Carousel className='main_slider'>
                <div>
                    <img src={img} height="320px" width="200px"/>
                    <div className="legend">
                        <div className='first-paragraph'> <AppleIcon sx={{width:'40px',height:'49px'}}/><span>iPhone 14 Series</span></div>
                        <div className='second-paragraph'><span>Up to 10%<br />off Voucher</span></div>
                        <div className='third-paragraph'><span>Shop Now </span><ArrowForwardIcon sx={{position:'relative',top:'10px'}}  /></div>
                    </div>
                </div>
                <div>
                    <img src={img} height="320px" width="200px" />
                    <div className="legend">
                        <div className='first-paragraph'> <AppleIcon sx={{width:'40px',height:'49px'}}/><span>iPhone 14 Series</span></div>
                        <div className='second-paragraph'><span>Up to 10%<br />off Voucher</span></div>
                        <div className='third-paragraph'><span>Shop Now </span><ArrowForwardIcon sx={{position:'relative',top:'10px'}}  /></div>
                    </div>
                </div>
                <div>
                    <img src={img} height="320px" width="100px" />
                    <div className="legend">
                        <div className='first-paragraph'> <AppleIcon sx={{width:'40px',height:'49px'}}/><span>iPhone 14 Series</span></div>
                        <div className='second-paragraph'><span>Up to 10%<br />off Voucher</span></div>
                        <div className='third-paragraph'><span>Shop Now </span><ArrowForwardIcon sx={{position:'relative',top:'10px'}}  /></div>
                    </div>
                </div>
            </Carousel>
        );
    
}

export default index

