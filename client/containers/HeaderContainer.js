var Redux = require('react-redux');

var updateSearchQuery = require('actions/updateSearchQuery');
var updateFilter = require('actions/updateFilter');
var resetViewToDefault = require('actions/resetViewToDefault');

var Header = require('components/Header');

var mapStateToProps = (state) => {
	return {
		searchQuery: state.searchQuery,
    currentFilter: state.currentFilter
	}
};

var mapDispatchToProps = (dispatch) => {
	return {
		onClickLogo: () => {
			dispatch(resetViewToDefault());
		}
	};
};

var HeaderContainer = Redux.connect(mapStateToProps, mapDispatchToProps)(Header);

module.exports = HeaderContainer;