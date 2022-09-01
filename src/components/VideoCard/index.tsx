import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IVideo } from '../../common/interfaces/video.interface';

export interface VideoCardProps {
  video: IVideo;
}

const VideoCard = (props: VideoCardProps) => {
  const { video } = props;

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia image={video?.snippet?.thumbnails?.high?.url}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={`/video/${video.id.videoId}`} >
          <Typography variant="h5" fontWeight="bold" color="#FFF">
            {video?.snippet?.title?.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`} >
          <Typography variant="h6" color="gray">
            {video?.snippet?.channelTitle}
            <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
