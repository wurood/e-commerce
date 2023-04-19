import React from 'react'
import style from './style.module.css';
import Tittle from '../../Tittle/index';
import Paragraph from '../../Paragraph/index';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import DownloadAppStore from '../../../assets/download-appstore.png';
import downloadGoogle from '../../../assets/download-google.png';
import QrCode from '../../../assets/Qrcode.png';
import FacebookIcon from '../../../assets/facebook-icon.png';
import twitterIcon from '../../../assets/twitter-icon.png';
import InstagramIcon from '../../../assets/instgram_icon.png';
import LinkedInIcon from '../../../assets/linkedin-icon.png';


function index() {
  return (
    <div className={style.wrapper}>
        <div className={style.content}>
                    <div className={style.card}>
                       <Tittle text="Exclusive"  color="white"/>	
                        <p className={style.subTitle}>Subscribe</p>
                        <Paragraph text="Get 10% off your first order"  color="white"/>	
                        <div className={style.email}><span>Enter your email</span><KeyboardArrowRightOutlinedIcon /></div>
                    </div>
                    <div className={style.card}>
                       <Tittle text="Support"  color="white"/>	
                        <Paragraph text="111 Bijoy sarani, Dhaka,DH 1515, Bangladesh."  color="white"/>
                        <Paragraph text="exclusive@gmail.com"  color="white"/>	
                        <Paragraph text="+88015-88888-9999"  color="white"/>		
                    </div>

                    <div className={style.card}>
                       <Tittle text="Account"  color="white"/>	
                        <Paragraph text="My Account"  color="white"/>
                        <Paragraph text="Login / Register"  color="white"/> 
                        <Paragraph text="Cart"  color="white"/>	
                        <Paragraph text="Wishlist"  color="white"/>
                        <Paragraph text="Shop"  color="white"/>		
                    </div>
                    <div className={style.card}>
                       <Tittle text="Quick Link"  color="white"/>	
                        <Paragraph text="Privacy Policy"  color="white"/>
                        <Paragraph text="Terms Of Use"  color="white"/> 
                        <Paragraph text="FAQ"  color="white"/>	
                        <Paragraph text="Contact"  color="white"/>
                    </div>

                    <div className={style.card}>
                       <Tittle text="Download App"  color="white"/>	
                        <p className={style.DownloadApp}>Save $3 with App New User Only</p>
                        <div className={style.imgGrid}>
                            <img className={style.QR} src={QrCode} />
                        <div className={style.playStoreGrid}>
                            <img src={downloadGoogle} />
                            <img src={DownloadAppStore} />
                        </div>
                        </div>

                        <div className={style.socialMedia}>
                            <img className={style.socialMediaImg}  src={FacebookIcon}  />
                            <img className={style.socialMediaImg} src={twitterIcon} />
                            <img className={style.socialMediaImg} src={InstagramIcon}  />
                            <img className={style.socialMediaImg} src={LinkedInIcon} />
                        </div>
                        </div>
                </div>
    </div>
  )
}

export default index