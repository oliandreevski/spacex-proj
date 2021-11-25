import React from 'react'
import {Grid} from '@mui/material'
import CardDetails from './CardDetails'

// ROCKET DETAILS
function DetailsRocket({data}) {
    return (
        <div>
           <Grid container spacing={2} >
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Rocket Name' props={data.launch.rocket.rocket_name}/>        
                </Grid>
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Number of Engines' props={data.launch.rocket.rocket.engines.number}/> 
                </Grid>
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Height (meters)' props={data.launch.rocket.rocket.height.meters}/> 
                </Grid>
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Mass (kg)' props={data.launch.rocket.rocket.mass.kg}/>        
                </Grid>
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Country' props={data.launch.rocket.rocket.country}/> 
                </Grid>
                <Grid item xs={12} sm={4}>                
                    <CardDetails title='Cost per Launch' props={data.launch.rocket.rocket.cost_per_launch}/> 
                </Grid>
            </Grid>
        </div>
    )
}

export default DetailsRocket