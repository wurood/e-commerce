import React from 'react'
import { createTheme } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";
import ItemViewer from '../../components/ItemViewer';


function ProductDetail() {
    const theme = createTheme({
        FlexBoxTheme: {
            display: "flex",
            justifyContent: "space-between",
        },
    })
    return (
        <>
            <Box sx={theme.FlexBoxTheme}>
            <ItemViewer />
            </Box>
        </>
    )
}

export default ProductDetail
