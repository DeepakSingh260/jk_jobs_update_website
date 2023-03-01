import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Box, CardActions, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const default_blog_img = 'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'



const PostCard = ({ props, id }) => {
    if(props.desc == null){
    props.desc = ""
    }
    

    return (
        <Card component={Link} to={'/post/' + id} sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', textDecoration: 'none', }}>
            <CardMedia
                component='img'
                height='200'
                image={props.link}
                sx={{
                    objectFit: 'contain'
                }}

            />
            <Box sx={{ padding: '0.1rem', display: 'flex', flexDirection: 'column' }}>
                <CardHeader

                    title={props.heading||""}
                    subheader=""

                    sx={{
                        paddingBottom: '0px'
                    }}
                />

                <CardContent >
                    <Typography variant='caption'>
                        {props.desc.length > 150 ? props.desc.slice(0, 150) : props.desc||""}
                    </Typography>
                    <Typography variant='caption' color='grey' display='block' textAlign='right'>
                        {new Date(props.date).toDateString()}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

export default PostCard