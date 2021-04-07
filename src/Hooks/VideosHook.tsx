import {useState, useEffect} from 'react';
import Youtube from '../Apis/Youtube';

const VideosHook = (defaultSearchTerm : string) => {

    const [videos,setVideos] = useState<any>([]);

    useEffect(() => {
        search(defaultSearchTerm)
    },[defaultSearchTerm])

    const search = (async (term : string)  => {
        const apiResponse = await Youtube.get('/search', {
            params: {
                q : term
            }
        });
        setVideos(apiResponse.data.items)
    });
    return [videos, search]
}
export default VideosHook;