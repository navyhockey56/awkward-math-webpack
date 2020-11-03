import { handleResponse } from './utils';

export const getVideos = () => {
  return fetch('/api/videos').then(handleResponse);
  // return [
  //   { title: 'My Video', description: 'Blah Blah', url: 'https://willdengler.com' },
  //   { title: 'My 2nd Video', description: 'Foo Bar', url: 'https://awkwardmath.com' }
  // ];
}
