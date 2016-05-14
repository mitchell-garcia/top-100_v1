module.exports = function updateNumberVisibleAlbums(amount) {
  return {
    type: 'UPDATE_NUMBER_OF_VISIBLE_ALBUMS',
    amount: amount
  }
}