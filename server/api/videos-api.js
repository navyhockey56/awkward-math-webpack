const videos = [
  { title: 'My Video', description: 'Blah Blah', url: 'https://willdengler.com' },
  { title: 'My 2nd Video', description: 'Foo Bar', url: 'https://awkwardmath.com' }
];

const getVideos = (_, response) => {
  response.json(videos);
}

module.exports = {
  getVideos
};
