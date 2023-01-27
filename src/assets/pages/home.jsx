import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PostCard from '../components/card'
import app from '../components/firebase'
import {getDatabase , ref , onValue} from "firebase/database"

const Home = () => {

    const [jobs_update_list , setJobList] = useState([])
    const database = getDatabase(app)
    let tempList = []
    useEffect(()=>{
 
    const update_list = async()=>{

        let date = new Date()
        const lastDate = new Date("08/01/2022")
        while ( date>lastDate){
            const date_st =  String(date.getMonth() + 1).padStart(2, '0')+":"+ date.getDate() +":" +  +String(date.getFullYear()).substring(2,4)
            date.setDate(date.getDate() - 1)
            const reference  = ref(database,"JobUpdates/"+date_st)
        
            const listener = onValue(reference,(snapshot)=>{
                snapshot.forEach(child=>{
                    jobs_update_list.push([child.val().Heading ,child.val().Description,child.val().Link ])
                    
                })
                
                setJobList([...jobs_update_list])
                console.log(jobs_update_list)
            });
           
            
    }
    
}
update_list()

},[])

    return (
        <>
            <Container maxWidth='md' disableGutters sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                {/* <Typography variant='h5' fontWeight='bolder' textAlign='left'>Job Updates</Typography> */}
               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {
                        jobs_update_list.map((updates)=>
                            (
                                <PostCard props={{updates}}/>

                            )
                        )
                    }
            </Box>  
            </Container>
        </>
    )
}

export default Home