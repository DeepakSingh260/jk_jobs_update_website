import { DocumentScanner, DownloadForOffline, DownloadOutlined, FileDownload } from '@mui/icons-material'
import { Avatar, Box, Button, Container, CssBaseline, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const default_blog_img = 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const Post = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container maxWidth='md' disableGutters>
                <img src={props[2]} style={{ width: '100%' }}>
                </img>
            </Container>
            <Container maxWidth='md'>
                <Box marginBottom={1}>
                    {/* <Avatar
                    sx={{ position: 'fixed', zIndex: '10', bottom: '5%', right: '5%', width: '3rem', height: '3rem', backgroundColor: 'theme.palette.primary' }}>
                    <Button size='medium' >
                        <FileDownload fontSize='large'></FileDownload>
                    </Button>
                </Avatar> */}
                    <Typography gutterBottom variant='h5' fontWeight='bold'>
                        {props[0]}
                    </Typography>
                    <Button variant='contained' fullWidth>
                        Document<FileDownload fontSize='small' />
                    </Button>
                </Box>
                <Box>
                    <Typography variant='body1'>
                        {props[1]}
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Post