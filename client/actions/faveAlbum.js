module.exports = function faveAlbum(id) {
  return {
    type: 'TOGGLE_FAVE_ALBUM',
    value: id
  }
}