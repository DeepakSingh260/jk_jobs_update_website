import { DocumentScanner, DownloadForOffline, DownloadOutlined, FileDownload } from '@mui/icons-material'
import { Avatar, Box, Button, Container, CssBaseline, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ReactLinkify from 'react-linkify'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/appContext'

const default_blog_img = 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const Post = (props) => {
    const [job, setJob] = useState({ heading: '', link: '', desc: '' })
    const params = useParams()

    const { id } = params

    const context = useContext(AppContext)
    const { jobList } = context

    //scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0)
        if (jobList.length > 0) {
            setJob(jobList[id])
        }
    }, [jobList])

    return (
        <>
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9343947924618217"
                    crossorigin="anonymous"></script>
            </Helmet>
            <Container maxWidth='md' disableGutters>
                <img src={job.link} style={{ width: '100%' }}>
                </img>
            </Container>
            <Container maxWidth='md'>
                <Box marginBottom={1}>
                    <Typography gutterBottom variant='h5' fontWeight='bold'>
                        {job.heading}
                    </Typography>
                    <Button variant='contained' LinkComponent='a' href={job.link} target='_blank' fullWidth>
                        Donwload Image<FileDownload fontSize='small' />
                    </Button>
                </Box>
                <Box>
                    <Typography variant='body1' sx={{ wordWrap: 'normal', overflowX: 'hidden' }}>
                        <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) => (
                            <a target="blank" href={decoratedHref} key={key}>
                                {decoratedText}
                            </a>
                        )}>
                            {job.desc}
                        </ReactLinkify>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Post