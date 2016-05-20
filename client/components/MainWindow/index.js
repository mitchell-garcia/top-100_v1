var React = require('react');

var Song = require('components/Song');
var Album = require('components/Album');
var styles = require('./styles.scss');

var searchAlbums = require('util/searchAlbums');

var MainWindow = React.createClass({
	render() {
			var { activeFilter, isSearching, activeFilter, currentSearch, Albums, Songs } = this.props;
			var isSongContainer = (activeFilter === "Songs");
			var albumsDisplay = isSearching ? searchAlbums(Albums, currentSearch) : Albums;
			var songsDisplay = isSearching ? searchAlbums(Songs, currentSearch) : Songs;
			
			var searchResultsHeaderStyles = {
				display: isSearching ? "block" : "none"
			};
			
			return (
				<div className="main-window">
					<div className={isSongContainer ? "row row-tiny" : "row row-extended"} >
						<h6 className="search-results-header" style={searchResultsHeaderStyles}>
							<div className="row">
								{activeFilter} matching "{currentSearch}"
								<a href="" className="pure-button pure-button-primary" style={{fontSize: "14px", marginLeft: "5px"}}>Cancel</a>
							</div>
						</h6>
						{
							(() => {
								switch (activeFilter) {
									case "Songs":   
										return (songsDisplay.map((song, i) => { 
											debugger;
											return <Song key={i} 
																isSearching={isSearching} 
																id={song.id.attributes['im:id']} 
																number={i} 
																title={song.title.label} 
																cover={song['im:image'][2].label} />
										}));
									default:      
										return (albumsDisplay.map((album, i) => { 
											return <Album key={i} 
																id={album.id.attributes['im:id'] ? album.id : ''} 
																number={i} 
																title={album.title ? album.title.label : ''} 
																releaseDate={album['im:releaseDate'].attributes ? album['im:releaseDate'].attributes.label : ''} 
																category={album.category ? album.category.attributes.label : ''} 
																rights={album.rights ? album.rights.label : ''}
																cover={album['im:image'][2] ? album['im:image'][2].label : 'http://placehold.it/500x500'}
																price={album['im:price'] ? album['im:price'].label : '?.??'}
																link={album.link ? album.link.attributes.href : ''}
														/>
										}));
								}
							})()
						}
					</div>
			</div>
		);
	}
});

module.exports = MainWindow;