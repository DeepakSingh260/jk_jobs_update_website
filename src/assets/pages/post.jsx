import { DocumentScanner, DownloadForOffline, DownloadOutlined, FileDownload } from '@mui/icons-material'
import { Avatar, Box, Button, Container, CssBaseline, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const default_blog_img = 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const Post = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container maxWidth='md' disableGutters>
                <img src={default_blog_img} style={{ width: '100%' }}>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, unde?
                    </Typography>
                    <Button variant='contained' fullWidth>
                        Document<FileDownload fontSize='small' />
                    </Button>
                </Box>
                <Box>
                    <Typography variant='body1'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error blanditiis corrupti aliquid, maxime assumenda quibusdam magni? Distinctio, maxime adipisci quaerat necessitatibus reprehenderit nam totam id placeat eveniet repudiandae harum architecto ut ipsum similique quibusdam neque tempora delectus debitis, quis, ab fugiat illum itaque! Dolor ut maiores impedit earum eum quam ipsum quia dolorem quisquam veniam vitae adipisci aliquam quidem eveniet non nostrum nisi dignissimos commodi repudiandae ipsa aliquid, recusandae quae reiciendis! Earum, sint. Consequuntur enim repellendus saepe dolore, rem eos alias! Facere laborum nihil, vero non adipisci veniam nostrum minima aspernatur consectetur officiis earum dolorum perspiciatis ducimus eos commodi aliquam.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Post