var MakeRequest = require('util/makeRequest');

module.exports = () => {
  return MakeRequest('GET', 'https://itunes.apple.com/us/rss/topalbums/limit=100/json');
};