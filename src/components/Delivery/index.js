import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
export default function Delivery() {
    return (

        < List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }
            }
        >


            <ListItem>

                <ListItemAvatar>

                    <Avatar sx={{ color: "black", bgcolor: "white" }}>
                        <LocalShippingOutlinedIcon sx={{ color: "black", bgcolor: "white" }} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Free Delivery" secondary="Enter your postal code for Delivery Availability" />
            </ListItem>
            <Divider sx={{ color: "black" }} />
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ color: "black", bgcolor: "white" }}>
                        <CachedOutlinedIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Return Delivery" secondary="Free 30 Days Delivery Returns. Details" />
            </ListItem>


        </List >
    );
}