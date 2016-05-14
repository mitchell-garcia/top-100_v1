module.exports = function updateSearchQuery(text) {
  return {
    type: 'UPDATE_SEARCH_QUERY',
    query: text
  }
}