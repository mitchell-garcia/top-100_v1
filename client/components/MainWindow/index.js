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
									return (this.props.Songs.map((song, i) => { 
										return <Song key={i} id={song.id.attributes['im:id']} number={i} title={song.title.label} cover={song['im:image'][2].label} />
									}));
								default:      
									return (this.props.Albums.map((album, i) => { 
										return <Album key={i} id={album.id.attributes['im:id']} number={i} title={album.title.label} rights={album.copyright} cover={album['im:image'][2].label} />
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