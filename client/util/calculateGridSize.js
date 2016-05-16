module.exports = function calculateGridSize(size = 5) {
  switch(size) {
    case 5 :
      return "20%"
    case 4 :
      return "25%"
    case 3 :
      return "33.33%"
    case 2 :
      return "50%"
    case 1 :
      return "100%"
    default :
      return "20%"
  }  
}