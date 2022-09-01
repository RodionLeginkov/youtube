import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { Sidebar, Videos } from '../../components';
import { fetchFromApi } from '../../utils/fetchFromApi';
import { IVideo } from '../../common/interfaces/video.interface';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('New');
  const [videos, setVideos] = useState<IVideo[]>([]);

  const getVideos = async () => {
    const data = await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
    setVideos(data.items);
  };

  useEffect(() => {
    getVideos();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '94vh' }, borderRight: '1px solid #3d3d3d', backgroundColor: '#000', px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Videos videos={videos} direction={'row'} />
      </Box>
    </Stack>
  );
};

export default Feed;
