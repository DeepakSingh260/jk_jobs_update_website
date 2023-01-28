import { Email, Facebook, Instagram, Telegram, Twitter } from '@mui/icons-material'
import { Box, Container, IconButton, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <>
            <Container maxWidth='md' sx={{ textAlign: 'center', my: '3rem' }}>
                <Typography variant='h5' fontWeight='bolder'>
                    About Us
                </Typography>
                <Typography variant='body1' >
                    We provide you every update regarding Govt. Jobs, Private Jobs, Results, Admit Cards. Datesheets, Answer keys etc.
                </Typography>
                <Typography variant='body1' fontWeight='bolder' sx={{ mt: '2rem' }}>
                    For Paid Collaboration
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Email />
                    <a href='mailto:JKJOBSUPDATE@GMAIL.COM'>
                        JKJOBSUPDATE@GMAIL.COM
                    </a>
                </Box>
                <Box>
                    <Typography variant='body1' fontWeight='bolder' sx={{ mt: '2rem' }}>
                        Follow Us At
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <IconButton LinkComponent='a' target='_blank' href='https://www.instagram.com/jkjobsupdateofficial'>
                            <Instagram fontSize='large' />
                        </IconButton>
                        <IconButton LinkComponent='a' target='_blank' href='https://www.facebook.com/jkjobsupdateofficial'>
                            <Facebook fontSize='large' />
                        </IconButton>
                        <IconButton LinkComponent='a' target='_blank' href='https://telegram.me/jkjobsupdate'>
                            <Telegram fontSize='large' />
                        </IconButton>
                        <IconButton LinkComponent='a' target='_blank' href='https://www.twitter.com/jkjobsupdate'>
                            <Twitter fontSize='large' />
                        </IconButton>

                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default About