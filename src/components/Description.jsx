import React from 'react'
import { Typography} from '@mui/material';

function Description({data}) {
    return (
        <Typography sx={{ m:3}}>{data.launch.details}</Typography>
    )
}

export default Description
