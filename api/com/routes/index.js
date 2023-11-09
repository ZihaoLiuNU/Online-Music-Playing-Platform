
import trackRouter from './track-route.js';
import artistRouter from './artist-route.js';
import playlistRouter from './playlist-route.js';

//set the entry path of the api for handling the back end services. 
const route = (app) => {
    app.use('/tracks',trackRouter)
       .use('/artists',artistRouter)
       .use('/playlists',playlistRouter)
}

export default route;


