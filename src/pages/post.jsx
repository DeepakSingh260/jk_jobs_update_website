import { DocumentScanner, DownloadForOffline, DownloadOutlined, FileDownload } from '@mui/icons-material'
import { Avatar, Box, Button, Container, CssBaseline, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import ReactLinkify from 'react-linkify'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/appContext'

const default_blog_img = 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const Post = (props) => {
    const params = useParams()

    const { id } = params

    const context = useContext(AppContext)
    const { jobList } = context

    const job = jobList[id]


    //scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container maxWidth='md' disableGutters>
                <img src={job.link} style={{ width: '100%' }}>
                </img>
            </Container>
            <Container maxWidth='md'>
                <Box marginBottom={1}>
                    <Typography gutterBottom variant='h5' fontWeight='bold'>
                        {job.heading}
                    </Typography>
                    {/* <Button variant='contained' fullWidth>
                        Document<FileDownload fontSize='small' />
                    </Button> */}
                </Box>
                <Box>
                    <Typography variant='body1' sx={{ wordWrap: 'normal', overflowX: 'hidden' }}>
                        <ReactLinkify>
                            {job.desc}
                        </ReactLinkify>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Post