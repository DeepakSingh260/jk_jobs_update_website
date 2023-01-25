import { Container, Typography } from '@mui/material'
import React from 'react'

const default_blog_img = 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const Post = () => {
    return (
        <>
            <Container maxWidth='xs'>
                <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, unde?
                </Typography>
                <img src={default_blog_img}>
                </img>
            </Container>
        </>
    )
}

export default Post