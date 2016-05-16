module.exports = function calculateGridSize(windowInnerWidth) {
  if(windowInnerWidth >= 960) {
    return 5;
  }
  if(windowInnerWidth >= 640) {
    return 3;
  }
  
  // graceful degredation + mobile.
  return 2;
}