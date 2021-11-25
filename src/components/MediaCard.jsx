import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rocket from '../assets/Rocket-bro.svg'



export default function MediaCard({data}) {

  const onMediaFallback = event => event.target.src = Rocket;

  // MAIN CARD
  return (
    <Card sx={{ maxWidth: 345 , height:320}}>
      <CardMedia
        component="img"
        height="160"
        image={data.links.flickr_images}
        alt='Rocket'
        onError={onMediaFallback}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center" noWrap={true}>
        {data.mission_name}
        </Typography>
        <Typography variant="h6" color="text.secondary"  component="div" align='center' noWrap={true}>
          ({data.launch_year})  |  {data.rocket.rocket_name} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button href={`${data.id}`} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
