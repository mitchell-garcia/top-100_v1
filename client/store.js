var Redux = require('redux');
var _ = require('lodash');
var localStorageAdapter = require('util/localStorageAdapter');

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
			var isSearching = query !== '';
			return Object.assign({}, state, {
				isSearching: isSearching,
				searchQuery: query
			});
			
		case 'SHOW_GLOBAL_FILTER_DROPDOWN' :
			var { value } = action;
			return Object.assign({}, state, {
				isGlobalFilterDropdownVisible: value
			});
			
		case 'UPDATE_FILTER' :
			var { text } = action;
			localStorageAdapter.setItem('currentFilter', text);
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
			
		case 'UPDATE_GRID_SIZE' :
			var { value } = action;
			return Object.assign({}, state, {
				gridSize: value
			});
			
		case 'VIEW_TO_DEFAULT' :
			localStorageAdapter.setItem('currentFilter', 'Albums');
			return Object.assign({}, state, {
				currentFilter: 'Albums',
				isViewingAlbumDetails: false
			});
			
		case 'TOGGLE_FAVE_ALBUM' :
			var { value } = action;
			var alreadyFaved = state.faves.includes(value);
			if(alreadyFaved) {
				var newFaves = state.faves.replace(`,${value}`, '')
			} else {
				var newFaves = `${state.faves},${value}`;
			}
			localStorageAdapter.setItem('faves', newFaves);
			return Object.assign({}, state, {
				faves: newFaves
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
		currentFilter: localStorageAdapter.getItem('currentFilter') ? localStorageAdapter.getItem('currentFilter') : 'Albums',
		searchQuery: '',
		
		// UI:Data
		activeAlbumId: 0,
		gridSize: 5,
		
		// UI:Booleans
		isSearching: false,
		isLoadingInitialState: true,
		isLoadingAlbums: true,
		isLoadingSongs: true,
		isGlobalFilterDropdownVisible: false,
		isViewingAlbumDetails: false,
		
		// UI:Features
		faves: localStorageAdapter.getItem('faves') ? localStorageAdapter.getItem('faves') : ''
	}
);