var React = require('react');
var styles = require('./styles.scss');

var Song = require('components/Song');

var MainWindow = React.createClass({
	render() {
			return (
			<div className="main-window">
				<div className="row row-extended">
					{
						(() => {
							switch (this.props.activeFilter) {
								case "Songs":   
									return (this.props.songs.map((song, i) => { 
										return <Song key={i} title={song.title.label} />
									}));
								default:      
									return (this.props.albums.map((album, i) => { 
										return <Song key={i} title={album.title.label} />
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