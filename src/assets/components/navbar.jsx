import { History, Home, HouseOutlined, RecentActors, Settings } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <AppBar position='fixed' sx={{ top: 'auto', bottom: '0' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <IconButton>
                        <HouseOutlined fontSize='large'></HouseOutlined>
                    </IconButton>
                    <IconButton>
                        <History fontSize='large'></History>
                    </IconButton>
                    <IconButton>
                        <Settings fontSize='large'></Settings>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar