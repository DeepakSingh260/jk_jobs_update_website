import { Box, Container, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PostCard from '../components/card'
import { LoadingAnim } from '../components/circleLoadingAnim'
import { AppContext } from '../context/appContext'



const Home = () => {

    const context = useContext(AppContext)
    const { jobList } = context

    return (
        <>
            <Container maxWidth='md' disableGutters>
                {/* <Typography variant='h5' fontWeight='bolder' textAlign='left'>Job Updates</Typography> */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        jobList.length > 0 ? jobList.map((updates, idx) => {
                            return (
                                <React.Fragment key={idx} >
                                    <PostCard key={idx} props={updates} />
                                    <hr></hr>
                                </React.Fragment>
                            )
                        }
                        ) : <LoadingAnim />
                    }
                </Box>
            </Container>
        </>
    )
}

export default Home