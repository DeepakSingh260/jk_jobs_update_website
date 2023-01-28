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
        let temp = []
        jobList.forEach((job, idx) => {
            if (job.heading.toUpperCase().includes(query.toUpperCase())) {
                temp.push({ ...job, idx })
            }
        })

        setFilteredUpdates(temp)
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
                        filteredUpdates.map((updates) => {
                            return (
                                <React.Fragment key={updates.idx} >
                                    <PostCard props={updates} id={updates.idx} />
                                    <hr></hr>
                                </React.Fragment >
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