import React from 'react'
import {Grid} from '@mui/material'

import Header from '../components/Header';
import Content from '../components/Content';
import { useMissions } from '../hooks/useMissions'
import Loading from './Loading';


export default function Main(){

    const {error,loading,data} = useMissions()
    if(loading) return <Loading/>
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

            {/* MAIN CONTAINER */}
            <Grid item xs={9} sm={8}>
              <Content data={data}/>
            </Grid>

            {/* Margin Right */}
          <Grid item xs={1.5} sm={2}></Grid>
        </Grid> 

  </Grid>
  
  )  
}