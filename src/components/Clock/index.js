import React, { useState } from "react";
import style from './Clock.module.css';
function Clock() {
    let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
        const [days, setDays] = useState();
        const [hours, setHours] = useState();
        const [minutes, setMinutes] = useState();
        const [seconds, setSeconds] = useState();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  setDays(Math.floor(dateDiff / (1000 * 60 * 60 * 24)));
  setHours(Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  setMinutes(Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)));
  setSeconds(Math.floor((dateDiff % (1000 * 60)) / 1000));
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
    return (
        // <ul>
        //    <p>Days</p><li>{days < 10 ? `0${days}` : days}</li>
        //    <p>Days</p><li>{hours < 10 ? `0${hours}` : hours}</li>
        //    <p>Days</p><li>{minutes < 10 ? `0${minutes}` : minutes}</li>
        //    <p>Days</p><li>{seconds < 10 ? `0${seconds}` : seconds}</li>
        // </ul>
        <div className={style.flexDiv}>
            <div className={style.container}>
                <p className={style.type}>Days</p>
                <p className={style.number}>{days < 10 ? `0${days}` : days}</p>
            </div>
            <p className={style.separator}>:</p>
            <div className={style.container}>
                <p className={style.type}>Hours</p>
                <p className={style.number}>{hours < 10 ? `0${hours}` : hours}</p>
            </div>
            <p className={style.separator}>:</p>
            <div className={style.container}>
                <p className={style.type}>Minutes</p>
                <p className={style.number}>{minutes < 10 ? `0${minutes}` : minutes}</p>
            </div>
            <p className={style.separator}>:</p>
            <div className={style.container}>
                <p className={style.type}>Second</p>
                <p className={style.number}>{seconds < 10 ? `0${seconds}` : seconds}</p>
            </div>
        </div>
    );
}
export default Clock;