import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, Loader, ChannelCard } from '..';
import { IVideo } from '../../common/interfaces/video.interface';
import { ResponsiveStyleValue } from '@mui/system';

export interface VideoProps {
  videos: IVideo[];
  direction?: ResponsiveStyleValue<'row' | 'row-reverse' | 'column' | 'column-reverse'> | undefined;
}

const Videos = (props: VideoProps) => {
  const { videos, direction } = props;
  if (!videos?.length) return <Loader />;
  return (
    <Stack direction={direction}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}>
      {videos.map((item: IVideo, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
