const VideoItem : React.FC<any> = ({video, onVideoSelect}) =>  {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>
        <div>
            <div className="mt-2 mb-2">
                <b>{video.snippet.title}</b>
            </div>
        </div>
    </div>
  );
};
export default VideoItem;