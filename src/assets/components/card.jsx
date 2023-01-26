import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Box, CardActions, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const default_blog_img = 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'



const PostCard = (props) => {
    return (
        <Card component={Link} to='/post' sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textDecoration: 'none' }}>
            <CardMedia
                component='img'
                height='200'
                image={default_blog_img}
            // image={props.blog.blogImg ? props.blog.blogImg : default_blog_img}

            />
            <Box sx={{ padding: '0.1rem', display: 'flex', flexDirection: 'column' }}>
                <CardHeader

                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eius!"
                    subheader=""
                    // title={props.blog.blogTitle}
                    // subheader={props.blog.userId}
                    sx={{
                        paddingBottom: '0px'
                    }}
                />

                <CardContent >
                    <Typography variant='caption'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus pariatur laborum rem incidunt recusandae autem reprehenderit voluptatum eaque praesentium.
                    </Typography>
                    <Typography variant='caption' color='grey' display='block' textAlign='right'>
                        Sept 24, 2022
                    </Typography>
                </CardContent>
            </Box>
            <CardActions>
                {/* <Button component={Link} to={'/editblog/' + props.blog['_id']}>Edit</Button> */}
            </CardActions>
        </Card>
    )
}

export default PostCard