module.exports = function hideAlbumDetails(id) {
  return {
    type: 'HIDE_ALBUM_DETAILS',
    value: id
  }
}