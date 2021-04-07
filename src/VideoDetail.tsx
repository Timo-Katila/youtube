import React from 'react';

//Bootstrap imports
import Col from 'react-bootstrap/Col';

const VideoDetail: React.FC<any> = ({video}) => {

  if (!video) {
    return <Col>Loading...</Col>
  };    
    
  const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;
   
  return(
    <React.Fragment>
      <Col className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title="Video player" src={videoSrc}/>

      </Col>
      <div>
        <h4 className="mt-3">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </React.Fragment>
  )
};
export default VideoDetail;