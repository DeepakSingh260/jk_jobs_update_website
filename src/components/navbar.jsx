import { ContactPage, History, Home, House, HouseOutlined, HouseTwoTone, Info, InfoOutlined, InfoRounded, Instagram, More, RecentActors, Search, Settings } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <AppBar position='fixed' sx={{ top: 'auto', bottom: '0', }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <IconButton LinkComponent={Link} to='/'>
                        <House color='white' fontSize='large'></House>
                    </IconButton>
                    <IconButton LinkComponent={Link} to='/search'>
                        <Search color='white' fontSize='large'></Search>
                    </IconButton>
                    <IconButton LinkComponent={Link} to='/about'>
                        <Info color='white' fontSize='large'></Info>
                    </IconButton>
                </Toolbar >
            </AppBar >
        </>
    )
}

export default Navbar