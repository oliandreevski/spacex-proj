import React from 'react'
import CardDetails from './CardDetails'
import {Grid} from '@mui/material'



// MISSION DETAILS
function Details({data}) {
    return (
            
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Mission Name' props={data.launch.mission_name}/>        
                </Grid>
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Mission Year' props={data.launch.launch_year}/> 
                </Grid>
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Launch Site' props={data.launch.launch_site.site_name}/> 
                </Grid>
            </Grid>
        
    )
}

export default Details
