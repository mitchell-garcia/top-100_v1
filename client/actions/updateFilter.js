module.exports = function updateFilter(text) {
  return {
    type: 'UPDATE_FILTER',
    text: text
  }
}