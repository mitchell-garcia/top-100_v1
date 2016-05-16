var Redux = require('redux');
var _ = require('lodash');

var { createStore } = Redux;

function reducer(state = [], action) {
	switch (action.type) {
		case 'DATA_FETCH' :
			var partToUpdate = {};
			var { namespace, data } = action;
			var capitalizedNamespace = _.capitalize(namespace)

			partToUpdate[namespace] = data;
			
			// set isLoading[blank] to false
			partToUpdate[`isLoading${capitalizedNamespace}`] = false;
			
      return Object.assign({}, state, partToUpdate);

		case 'UPDATE_SEARCH_QUERY' :
			var { query } = action;
			return Object.assign({}, state, {
				isSearching: true, 
				searchQuery: query
			});
			
		case 'SHOW_GLOBAL_FILTER_DROPDOWN' :
			var { value } = action;
			return Object.assign({}, state, {
				isGlobalFilterDropdownVisible: value
			});
			
		case 'UPDATE_NUMBER_OF_VISIBLE_ALBUMS' :
			var { amount } = action;
			var newAmount = amount + 10;
			return Object.assign({}, state, {
				visibleAlbums: newAmount
			});
			
		case 'UPDATE_FILTER' :
			var { text } = action;
			return Object.assign({}, state, {
				currentFilter: text
			});
			
		case 'VIEW_ALBUM_DETAILS' :
			var { value } = action;
			return Object.assign({}, state, {
				activeAlbumId: value,
				isViewingAlbumDetails: true
			});
			
		case 'HIDE_ALBUM_DETAILS' :
			var { value } = action;
			return Object.assign({}, state, {
				activeAlbumId: 0,
				isViewingAlbumDetails: false
			});
			
		default:
			return state;
	}
};

module.exports = Redux.createStore(reducer, 
	{
		// Data
		Albums: [],
		Songs: [],
		
		// Filter + Search Parameters
		currentFilter: 'Albums',
		visibleAlbums: 20,
		searchQuery: '',
		searchIn: 'ALL',
		
		// UI:Data
		activeAlbumId: 0,
		gridSize: 5,
		
		// UI:Booleans
		isSearching: false,
		isLoadingInitialState: true,
		isLoadingAlbums: true,
		isLoadingSongs: true,
		isGlobalFilterDropdownVisible: false,
		isViewingAlbumDetails: false
	}
);