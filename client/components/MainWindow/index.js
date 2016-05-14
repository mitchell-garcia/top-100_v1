var React = require('react');

var Song = require('components/Song');
var Album = require('components/Album');
var styles = require('./styles.scss');

var MainWindow = React.createClass({
	render() {
			var { activeFilter } = this.props;
			var isSongContainer = (activeFilter === "Songs");
			return (
			<div className="main-window">
				<div className={isSongContainer ? "row row-tiny" : "row row-extended"} >
					{
						(() => {
							switch (this.props.activeFilter) {
								case "Songs":   
									return (this.props.songs.map((song, i) => { 
										return <Song key={i} number={i} title={song.title.label} cover={song['im:image'][2].label} />
									}));
								default:      
									return (this.props.albums.map((album, i) => { 
										return <Album key={i} number={i} title={album.title.label} cover={album['im:image'][2].label} />
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