import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../../utils/fetchFromApi';
import { Videos } from '../../components';
import { IVideo } from '../../common/interfaces/video.interface';


const SearchFeed = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const { searchTerm } = useParams<string>();

  const getSearch = async () => {
    const result = await fetchFromApi(`search?part=snippet&q=${searchTerm}`);
    setVideos(result.items);
  };

  useEffect(() => {
    getSearch();
  }, [searchTerm]);

  return (
    <Box p={2} minHeight='95vh'>
      <Typography>
        Search Results for <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} direction={'row'} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
