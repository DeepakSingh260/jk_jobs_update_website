import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import logoImg from '../assets/logo.jpg'
const Logo = () => {
    return (
        <>
            <AppBar position='relative' elevation={0} sx={{ top: '0', marginBottom: '1rem' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <img src={logoImg} width='100%' />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Logo