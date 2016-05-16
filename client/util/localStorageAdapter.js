/**
 * Note: Boilerplate for future save-settings behavior. 
 * Not currently in use.
 */

var localStorageAdapter = {
  saveState(stateObject) {
    try {
      localStorage.setItem('top100:state', JSON.stringify(stateObject));
      return true;
    } catch(e) {
      console.info('Saving settings to local storage failed! If in private mode, this is expected behavior.');
      return true;
    }
  },
  getSavedState() {
    try {
      var state = localStorage.getItem('top100:state');
      if(state !== '') {
        state = JSON.parse(state);
        return state;
      } else {
        return false;
      }
    } catch(e) {
      console.info('Fetching settings from local storage failed! If in private mode, this is expected behavior.');
      return false;
    }
  }
};

module.exports = localStorageAdapter;