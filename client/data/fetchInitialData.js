/**
 * Module that fetches all the data from iTunes and updates
 * store + re-renders application when it's complete.
*/

var albums = require('data/albums');
var songs = require('data/songs');

module.exports = (store) => {
  albums().then((success) => {
    let response = JSON.parse(success);
    store.dispatch({
      type: 'DATA_FETCH',
      data: response.feed.entry,
      namespace: 'Albums'
    });
  }).catch((e) => {
    console.log(e);
  });
  
  songs().then((success) => {
    let response = JSON.parse(success);
    store.dispatch({
      type: 'DATA_FETCH',
      data: response.feed.entry,
      namespace: 'Songs'
    });
  }).catch((e) => {
    console.log(e);
  })
}