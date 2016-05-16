module.exports = function updateGlobalFilterDropdown(toShowOrNotToShow) {
  return {
    type: 'SHOW_GLOBAL_FILTER_DROPDOWN',
    value: toShowOrNotToShow
  }
}