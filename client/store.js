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
		case 'UPDATE_NUMBER_OF_VISIBLE_ALBUMS' :
			var { amount } = action;
			var newAmount = amount + 10;
			return Object.assign({}, state, {
				visibleAlbums: newAmount
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
		visibleAlbums: 20,
		searchQuery: '',
		isSearching: false,
		currentFilter: 'Songs'
	}
);