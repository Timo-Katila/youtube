import Axios from 'axios';

const KEY = "AIzaSyABdO0Ov76cz13_nKR_6QKttjhhvtTz0jM";

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});
