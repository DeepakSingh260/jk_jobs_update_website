import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Box, CardActions, Button } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'


const default_blog_img = 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'



const PostCard = (props) => {
    console.log("props called")
    console.log(props)
    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <CardMedia
                component='img'
                height='200'
                image={props["Link"]}
                // image={props.blog.blogImg ? props.blog.blogImg : default_blog_img}
                sx={{
                    objectFit: 'cover',
                }}
            />
            <Box sx={{ padding: '0.1rem', display: 'flex', flexDirection: 'column' }}>
                <CardHeader

                    title={props["Title"]}
                    subheader=""
                    // title={props.blog.blogTitle}
                    // subheader={props.blog.userId}
                    sx={{
                        paddingBottom: '0px'
                    }}
                />

                <CardContent >
                    <Typography variant='caption'>
                        {props["Description"]}
                    </Typography>
                    <Typography variant='caption' color='grey' display='block'>
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