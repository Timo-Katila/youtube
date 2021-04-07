import VideoItem from './VideoItem';
const VideoList : React.FC<any> = ({videos, onVideoSelect}) => {
  
  const renderedList = videos.map((video: any) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });
  
  return (
    renderedList
  );
};
export default VideoList;