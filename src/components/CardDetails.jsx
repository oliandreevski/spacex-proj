import * as React from 'react';
import {  Typography } from '@mui/material';

 
//  CARD FOR DETAILS

export default function CardDetails({title,props}) {
  return (
    
      <Typography sx={{ 
        p:1,
        border: 3 ,
        borderRadius: 1,
        textAlign: 'center',
        bgcolor: '#dddddd',
        }}>
      <p>{title}</p><hr/>{props}
      </Typography>           
     
  );
}