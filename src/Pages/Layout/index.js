import React from 'react'
import { Outlet } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function Layout() {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    <header>this is header</header>
                    <Outlet />
                    <footer>this the footer</footer></Box>
            </Container>
        </React.Fragment>




    )
}

export default Layout
