import React, { useState, useEffect } from 'react';
import VideosHook from './Hooks/VideosHook';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

//Bootstrap imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const App: React.FC = () => {
  
  const [selectedVideo, setSelectedVideo] = useState<any>();
  const [videos, search] = VideosHook("Lukko - Ässät");

  useEffect(() => {
    setSelectedVideo(videos[0])
  },[videos]);
  
  return (
    
    <Container>
      
      <Row>
        <Col>
          <SearchBar onFormSubmit={search}/>
        </Col>
      </Row>
       
      <Row>
        <Col sm={8} className="mt-3">
          <VideoDetail video={selectedVideo}/> 
        </Col>
        <Col className="mt-3 text-center">
          <VideoList onVideoSelect={(video : any) => setSelectedVideo(video)} videos={videos}/>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
