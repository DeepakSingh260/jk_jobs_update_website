import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import PostCard from '../components/card'

const Home = () => {
    return (
        <>
            <Container maxWidth='xs' disableGutters sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                {/* <Typography variant='h5' fontWeight='bolder' textAlign='left'>Job Updates</Typography> */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                    <PostCard></PostCard>
                </Box>
            </Container>
        </>
    )
}

export default Home