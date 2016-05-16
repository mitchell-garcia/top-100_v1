var React = require('react');

var Song = require('components/Song');
var Album = require('components/Album');
var styles = require('./styles.scss');

var searchAlbums = require('util/searchAlbums');

var MainWindow = React.createClass({
	render() {
			var { activeFilter, isSearching, currentSearch, Albums } = this.props;
			var isSongContainer = (activeFilter === "Songs");
			var albumsDisplay = isSearching ? searchAlbums(Albums, currentSearch) : Albums;
			
			return (
			<div className="main-window">
				<div className={isSongContainer ? "row row-tiny" : "row row-extended"} >
					{
						(() => {
							switch (this.props.activeFilter) {
								case "Songs":   
									return (this.props.Songs.map((song, i) => { 
										return <Song key={i} id={song.id.attributes['im:id']} number={i} title={song.title.label} cover={song['im:image'][2].label} />
									}));
								default:      
									return (albumsDisplay.map((album, i) => { 
										return <Album key={i} 
															id={album.id.attributes['im:id']} 
															number={i} 
															title={album.title.label} 
															releaseDate={album['im:releaseDate'].attributes.label} 
															category={album.category.attributes.label} 
															rights={album.rights.label} 
															cover={album['im:image'][2].label}
															price={album['im:price'].label}
															link={album.link.attributes.href}
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