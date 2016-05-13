var MakeRequest = require('util/makeRequest');

module.exports = MakeRequest('GET', 'https://itunes.apple.com/us/rss/topsongs/limit=100/json');