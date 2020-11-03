const server = require('express')();
const cors = require('cors');
const videosApi = require('./api/videos-api'); 

const serverPort = process.env.SERVER_PORT || 1234;

// Enable CORS
server.use(cors());

// Define the endpoints
server.get('/api/videos', videosApi.getVideos);

// Start the server
server.listen(serverPort, () => console.log(`BFF started on ${serverPort}`));
