import { Box, Container, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import PostCard from '../components/card'
import { LoadingAnim } from '../components/circleLoadingAnim'
import { AppContext } from '../context/appContext'




const Home = () => {

    const context = useContext(AppContext)
    const { jobList, jobListSmall, loadMoreJobs } = context


    return (
        <>
            <Container maxWidth='md' disableGutters >

                <InfiniteScroll
                    dataLength={jobListSmall.length}
                    next={loadMoreJobs}
                    hasMore={true}
                    loader={<LoadingAnim />}

                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                        {
                            jobListSmall.map((updates, idx) => {
                                return (
                                    <React.Fragment key={idx} >
                                        <PostCard props={updates} id={idx} />
                                        <hr></hr>


                                    </React.Fragment>

                                )
                            }
                            )
                        }
                    </Box>
                </InfiniteScroll>
            </Container>
        </>
    )
}

export default Home