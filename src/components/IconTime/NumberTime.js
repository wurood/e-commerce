import React from 'react'
import style from './style.module.css';
import { data } from './data.js';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function NumberTime() {

    return (
        <Stack direction="row" spacing={2}>
            {data.map(({ number, time }) => (


                <Avatar direction='row' sx={{ width: 62, height: 62, bgcolor: '#FFFFFF', color: 'black' }}>
                    <div className={style.flexText}>
                        <h3>{number}</h3>
                        <p className={style.timeText}>{time}</p>
                    </div>
                </Avatar>

            ))}

        </Stack>
    )
}


export default NumberTime
