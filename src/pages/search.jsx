import { ArrowRightAlt } from '@mui/icons-material'
import { Box, Button, Container, FormControl, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-router-dom'
import PostCard from '../components/card'
import { LoadingAnim } from '../components/circleLoadingAnim'
import { AppContext } from '../context/appContext'



const Search = () => {

    const context = useContext(AppContext)
    const { jobList } = context


    const [query, setQuery] = useState('')
    const [filteredUpdates, setFilteredUpdates] = useState([])

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const res = jobList.filter((job) => {
            return job.heading.includes(query.toUpperCase())
        })

        setFilteredUpdates(res)
    }

    return (
        <>
            <Container maxWidth='md' disableGutters>
                {/* <Typography variant='h5' fontWeight='bolder' textAlign='left'>Job Updates</Typography> */}
                <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TextField
                        label='Search'
                        variant='outlined'
                        value={query}
                        onChange={handleQuery}
                        sx={{ margin: '1rem' }}
                    />
                    <Button variant='contained' type='submit' size='large'>Search</Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        filteredUpdates.map((updates, idx) => {
                            return (
                                <>
                                    <PostCard key={idx} props={updates} />
                                    <hr></hr>
                                </>
                            )
                        }
                        )
                    }
                </Box>
            </Container>
        </>
    )
}

export default Search