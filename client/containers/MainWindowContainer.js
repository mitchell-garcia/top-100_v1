var Redux = require('react-redux');
var MainWindow = require('components/MainWindow');

var mapStateToProps = (state) => {
	return {
		currentSearch: state.searchQuery,
    activeFilter: state.currentFilter,
		artists: state.artists,
		Albums: state.Albums,
		Songs: state.Songs,
		visibleAlbumsCount: state.visibleAlbums
	}
};

var MainWindowContainer = Redux.connect(mapStateToProps, null)(MainWindow);

module.exports = MainWindowContainer;