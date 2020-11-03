import React, { useState, useEffect } from 'react';
import VideoDisplay from './VideoDisplay';

import { getVideos } from '../../api/videos-api';

const loadingVideoPlaceholder = { title: 'Loading...', description: 'Loading...' };

export default function VideosPage() {
  const [videos, setVideos] = useState([loadingVideoPlaceholder]);
  const [videoIndex, setVideoIndex] = useState(0);
  
  const fetchAndSetVideos = () => {
    getVideos().then(videos => setVideos(videos));
  };
  useEffect(fetchAndSetVideos, []);

  const nextVideo = () => {
    if (videoIndex >= videos.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex(videoIndex + 1);
    }
  }

  const previousVideo = () => {
    if (videoIndex === 0) {
      setVideoIndex(videos.length - 1);
    } else {
      setVideoIndex(videoIndex - 1);
    }
  }

  return (
    <div className="jumbotron background-black">
      <VideoDisplay video={videos[videoIndex]} nextVideo={nextVideo} previousVideo={previousVideo} />
    </div>
  )
}
