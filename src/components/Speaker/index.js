import React from 'react'
import style from './style.module.css';
import IconTime from '../IconTime/iconTime';
import img from './../../Assets/speaker.jpg';
import BuyButton from '../BuyButton';


function Speaker() {
    return (
        <div>
            <div className={style.speakerItem}>
                <img className={style.speaker} src={img}></img>
                <p className={style.categoryText}>Categories</p>
                <p className={style.speakerText}>Enhance Your Music Experience</p>
                <div className={style.speakerIcon}><IconTime /></div>
                <div className={style.speakerButton}> <BuyButton /></div>
            </div>

        </div>
    )
}

export default Speaker
