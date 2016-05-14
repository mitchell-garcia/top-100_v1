var Redux = require('react-redux');
var MainWindow = require('components/MainWindow');

var mapStateToProps = (state) => {
	return {
		currentSearch: state.searchQuery,
    activeFilter: state.currentFilter,
		artists: state.artists,
		albums: state.albums,
		songs: state.songs,
		visibleAlbumsCount: state.visibleAlbums
	}
};

var MainWindowContainer = Redux.connect(mapStateToProps, null)(MainWindow);

module.exports = MainWindowContainer;