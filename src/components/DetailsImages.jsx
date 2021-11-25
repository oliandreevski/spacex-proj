import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// MISSIONS IMAGES
export default function MasonryImageList({data}) {
  return (
    <Box sx={{ width: 800, height: 450, overflowY: 'overflow'}}>
      <ImageList variant="masonry" cols={3} gap={8} >
        {data.launch.links.flickr_images.map((item,index) => (
          <ImageListItem key={index}>
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}


