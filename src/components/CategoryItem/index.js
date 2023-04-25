import * as React from 'react';
import style from './style.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import WatchRoundedIcon from '@mui/icons-material/WatchRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import { data } from './data';

function CategoryItem() {
    return (
        <Stack direction="row" spacing={12} >
            <Button sx="width:170px; height:145px;border-color:black;color:black;display:flex;flex-direction:column" variant="outlined" startIcon={<PhoneAndroidOutlinedIcon sx=" margin-bottom:20px; width:42px; height:37px;" />}>
                Phone
            </Button>

            <Button sx="width:170px; height:145px;border-color:black;color:black;display:flex;flex-direction:column" variant="outlined" startIcon={<ComputerOutlinedIcon sx=" margin-bottom:20px; width:42px; height:37px;" />}>
                Computer
            </Button>

            <Button sx="width:170px; height:145px;border-color:black;color:black;display:flex;flex-direction:column" variant="outlined" startIcon={<WatchRoundedIcon sx=" margin-bottom:20px; width:42px; height:37px;" />}>
                smart watch
            </Button>

            <Button sx="width:170px; height:145px; background-color:#DB4444;color:black;display:flex;flex-direction:column" variant="contained" startIcon={<CameraAltOutlinedIcon sx=" margin-bottom:20px; width:42px; height:37px;" />}>
                Camera
            </Button>

            <Button sx="width:170px; height:145px;border-color:black;color:black;display:flex;flex-direction:column" variant="outlined" startIcon={<HeadphonesOutlinedIcon sx=" margin-bottom:20px; width:42px; height:37px;" />}>
                Headphones
            </Button>

            <Button sx="width:170px; height:145px;border-color:black;color:black;display:flex;flex-direction:column" variant="outlined" startIcon={<VideogameAssetOutlinedIcon sx=" margin-bottom:20px; width:42px; height:37px;" />}>
                Gaming
            </Button>
        </Stack>
    );
}
export default CategoryItem