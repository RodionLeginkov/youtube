import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainContainer } from './app.styles';
import { Navbar } from './components';
import ChannelDetail from './pages/ChannelDetail';
import Feed from './pages/Feed';
import SearchFeed from './pages/SearchFeed';
import VideoDetail from './pages/VideoDetail';


const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </MainContainer>
  );
};

export default App;
