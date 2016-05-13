var Redux = require('redux');

var { createStore } = Redux;

function reducer(state = [], action) {
	switch (action.type) {
		case 'DATA_UPDATE' :
			return state.albums = actions.text;
		case 'CLICK_LOGO' :
			console.log('clicklogo');
			return state;
		default:
			return state;
	}
};

module.exports = Redux.createStore(reducer, 
	{
		albums: [],
		current_filter: 'albums',
		available_filters: ['albums', 'songs', 'artists']
	}
);