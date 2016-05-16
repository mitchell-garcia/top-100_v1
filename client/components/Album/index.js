var React = require('react');
var Redux = require('react-redux');
var AlbumDetails = require('components/AlbumDetails');
var viewAlbumDetails = require('actions/viewAlbumDetails');
var calculateGridSize = require('util/calculateGridSize');

var styles = require('./styles.scss');

var mapStateToProps = (state) => {
  return {
    activeAlbumId: state.activeAlbumId,
    isViewingAlbumDetails: state.isViewingAlbumDetails,
    gridSize: state.gridSize
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    viewAlbumDetails: (id) => {
      dispatch(viewAlbumDetails(id));
    }
  }
};

var Album = React.createClass({
  render() {
    var { cover, title, id, viewAlbumDetails, gridSize, isViewingAlbumDetails, activeAlbumId } = this.props;
    var [name, artist] = title.split('-');
    var isActiveAlbum = (activeAlbumId === id);
    
    var conditionalStyles = {
      zIndex: isActiveAlbum ? 99 : 1,
      backgroundColor: isActiveAlbum ? "#fff" : "transparent",
      opacity: (!isActiveAlbum && isViewingAlbumDetails) ? ".5" : "1",
      width: calculateGridSize(gridSize)
    };
    var albumArtStyles = {
      backgroundImage: 'url(' + cover + ')',
    };
    return (
      <div className="album-container" onClick={(e) => {
        viewAlbumDetails(id);
      }} style={conditionalStyles}>
        <div className="album-art" style={albumArtStyles}>
        </div>
        <div className="album-content">
          <h3 className="album-name">{name}</h3>
          <span className="album-artist">{artist}</span>
        </div>
        { 
          (function() {
            if(isActiveAlbum) {
              return ( <AlbumDetails  {...this.props} /> ); 
            }
          }).bind(this)()
        }
      </div>
    )
  }
});

Album = Redux.connect(mapStateToProps, mapDispatchToProps)(Album);

module.exports = Album;