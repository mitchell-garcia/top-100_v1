var _ = require('lodash');

var searchable = [''];

var SEARCHMAP = [
  {
    value: 'category',
    key: 'attributes.label'
  },
  {
    value: 'im:artist',
    key: 'label'
  },
  {
    value: 'im:name',
    key: 'label'
  }
];

module.exports = (albumsArray, query) => { 
  
  var found = [];
  
  _.map(albumsArray, function(album, key) {
    for(var i = 0; i < SEARCHMAP.length; i++) {
      var { value, key } = SEARCHMAP[i];
      if(_.get(album[value], key).includes(query)) {
        found.push(album);
      }
    }
  }, {});
  
  return found;
};