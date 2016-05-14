var Redux = require('redux');

var { createStore } = Redux;

function reducer(state = [], action) {
	switch (action.type) {
		case 'DATA_FETCH' :
			var partToUpdate = {};
			partToUpdate[action.namespace] = action.data;
      return Object.assign({}, state, partToUpdate);
		case 'UPDATE_SEARCH_QUERY' :
			return Object.assign({}, state, {
				isSearching: true, 
				searchQuery: action.query
			});
		case 'UPDATE_FILTER' :
			return Object.assign({}, state, {
				currentFilter: action.text
			});
		default:
			return state;
	}
};

module.exports = Redux.createStore(reducer, 
	{
		isLoadingInitialState: true,
		albums: [],
		songs: [],
		artists: [],
		searchQuery: '',
		isSearching: false,
		currentFilter: 'Albums'
	}
);