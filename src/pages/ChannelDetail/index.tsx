import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from '../../components';
import { fetchFromApi } from '../../utils/fetchFromApi';
import { IVideo } from '../../common/interfaces/video.interface';
import { IChannel } from '../../common/interfaces/channel.interface';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<IChannel>();
  const [videos, setVideos] = useState<IVideo[]>([]);
  const { id } = useParams();

  const getDetail = async () => {
    const result = await fetchFromApi(`channels?part=snippet&id=${id}`);
    setChannelDetail(result?.items[0]);
  };

  const getVideos = async () => {
    const result = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
    setVideos(result.items);
  };

  useEffect(() => {
    getDetail();
    getVideos();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} direction={'row'} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
