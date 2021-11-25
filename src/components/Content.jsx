import { Grid } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'


//  MAIN CONTENT
export default function Content({data}) {

    return (
        <Grid container spacing={4} my={2}>
            
            {data.launchesPast.map(mis => {
            return  <Grid item  xs={12} sm={4} key={mis.id}>
             <MediaCard data={mis}/>
             </Grid>
            })}
            
        </Grid>
    )
}
