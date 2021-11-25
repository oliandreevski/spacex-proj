import React from 'react'
import { useParams } from 'react-router';
import {useMission} from '../hooks/useMission'
import Header from '../components/Header';
import { Typography, Grid } from '@mui/material';
import Details from '../components/Details';
import DetailsRocket from '../components/DetailsRocket';
import DetailsImages from '../components/DetailsImages'
import Description from '../components/Description';
import Loading from './Loading' 



export default function Mission() {
    const {id} = useParams()

    const {data,loading,error} = useMission(id)

    console.log(error,loading,data);
    if (loading) return <Loading/>
    if(error) return <h3>Something went wrong</h3>

    return (
        <Grid container direction='column'>
            {/* HEADER */}
            <Grid item>
            <Header/>
            </Grid> 

            <Grid item container>
                {/* Margin Left */}
                <Grid item xs={1.5} sm={2}></Grid>

                    {/* Main */}
                    <Grid item xs={9} sm={8}>
                    
                      <Typography variant="h3" fontFamily="BankGotic"> Mission Details: </Typography> <hr/>  
                            
                            {/* DATA CONRAINERS */}
                        <Grid item container direction='column'>
                            <Grid item>
                            <Details data={data}/>
                            </Grid>
                            <Typography variant="h6" fontFamily='BankGotic'> Rocket Details: </Typography>
                            <Grid item>
                            <DetailsRocket data={data}/>
                            </Grid>
                            <Grid item container direction='column'>
                                <Grid item>
                                <Description data={data}/>
                                </Grid>
                                <Grid item>
                                <DetailsImages data={data}/>
                                </Grid>
                            </Grid>
                    </Grid>
                    </Grid>

                    {/* Margin Right */}
                <Grid item xs={1.5} sm={2}></Grid>  
            </Grid> 
        </Grid>
    )
}
