var React = require('react');
var Redux = require('react-redux');
var AlbumDetails = require('components/AlbumDetails');
var viewAlbumDetails = require('actions/viewAlbumDetails');
var calculateAlbumArtSize = require('util/calculateAlbumArtSize');

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
    var { cover, title, id, viewAlbumDetails, gridSize, number, isViewingAlbumDetails, activeAlbumId } = this.props;
    var [name, artist] = title.split('-');
    var isActiveAlbum = (activeAlbumId === id);
    
    var conditionalStyles = {
      zIndex: isActiveAlbum ? 99 : 1,
      backgroundColor: isActiveAlbum ? "#fff" : "transparent",
      opacity: (!isActiveAlbum && isViewingAlbumDetails) ? ".3" : "1",
      width: calculateAlbumArtSize(gridSize)
    };
    
    var albumArt = {
      backgroundImage: 'url(' + cover + ')',
    };
    
    var albumDetailsContainerZIndexFix = {
      zIndex: isActiveAlbum ? 99 : 1,
      backgroundColor: isActiveAlbum ? "#fff" : "transparent",
      position: "relative"
    };
    
    // Check if album's position in array = gridSize.
    // If so, it's on the far right and the details div 
    // should be aligned to the left of the div
    var remainder = (number + 1) % gridSize;
    
    var isRightAlignedElement = remainder === 0;
    var isRightBesideFarRight = remainder === (gridSize - 1);
    var albumDetailsPosition = isRightAlignedElement || isRightBesideFarRight ? "right" : "left";
    
    // For 2x2 grid, we ignore the element directly beside the far
    // right element because.. that's the leftmost element.
    if(gridSize <= 2 && isRightBesideFarRight) {
      albumDetailsPosition = "left";      
    }
    
    return (
      <div className="album-container" onClick={(e) => {
        viewAlbumDetails(id);
      }} style={conditionalStyles}>
        <div className="album-simple-details-container" style={albumDetailsContainerZIndexFix}>
          <div className="album-art" style={albumArt}>
          </div>
          <div className="album-content">
            <h3 className="album-name">{name}</h3>
            <span className="album-artist">{artist}</span>
          </div>
        </div>
        { 
          (function() {
            if(isActiveAlbum) {
              return ( <AlbumDetails align={albumDetailsPosition} {...this.props} /> ); 
            }
          }).bind(this)()
        }
      </div>
    )
  }
});

Album = Redux.connect(mapStateToProps, mapDispatchToProps)(Album);

module.exports = Album;