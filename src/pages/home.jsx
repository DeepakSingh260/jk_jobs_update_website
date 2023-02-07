import { Box, Container, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import PostCard from '../components/card'
import { LoadingAnim } from '../components/circleLoadingAnim'
import { GoogleAdsenseContainer } from '../components/GoogleAdsense'
import { AppContext } from '../context/appContext'





const Home = () => {

    const context = useContext(AppContext)
    const { jobList, jobListSmall, loadMoreJobs } = context

    return (
        <>
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9343947924618217"
                    crossorigin="anonymous"></script>
                {/* <script>
                    (adsbygoogle = window.adsbygoogle || []).push({ });
                </script> */}
            </Helmet>
            <Container maxWidth='md' disableGutters >
                {/* <Typography variant='h5' fontWeight='bolder' textAlign='left'>Job Updates</Typography> */}
                <GoogleAdsenseContainer client={'ca-pub-9343947924618217'} slot={'2286135410'} />

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