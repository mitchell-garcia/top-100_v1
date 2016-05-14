var Redux = require('react-redux');

var updateSearchQuery = require('actions/updateSearchQuery');
var updateFilter = require('actions/updateFilter');
var Header = require('components/Header');

var mapStateToProps = (state) => {
	return {
		searchQuery: state.searchQuery,
    currentFilter: state.currentFilter
	}
};

var mapDispatchToProps = (dispatch) => {
	return {
		onUpdateSearch: updateSearchQuery(dispatch),
    onUpdateFilter: updateFilter(dispatch)
	};
};

var HeaderContainer = Redux.connect(mapStateToProps, mapDispatchToProps)(Header);

module.exports = HeaderContainer;