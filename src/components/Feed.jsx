import React, { useState, useEffect } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchApi } from '../utils/fetchApi';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
      setVideos(data.items)
    })
  }, [selectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: 'column', md: 'row'
        }
      }}>
      <Box
        sx={{
          height: {
            sx: 'auto', md: '92vh'
          },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 }
        }}>

        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className='copyright'
          variant='body2'
          sx={{ mt: '5px', color: '#fff',fontSize:'13px' }}
        >Copyright &copy; 2022 Mytube
        </Typography>
      </Box>

      <Box p={2}
        sx={{ overflowY: 'auto', height: '90vh', flex: '2' }}
      >
        <Typography variant='h5' fontWeight='bold' mb={2} >{selectedCategory} <span style={{ color: '#fc1503' }}>Videos</span>
        </Typography>

        <Videos video={videos} />

      </Box>
    </Stack>
  )
}

export default Feed