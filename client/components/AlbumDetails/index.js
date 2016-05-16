var React = require('react');
var Redux = require('react-redux');
var _ = require('lodash');

var hideAlbumDetails = require('actions/hideAlbumDetails');
var faveAlbum = require('actions/faveAlbum');

var styles = require('./styles.scss');

var mapStateToProps = (state) => {
  return {
    faves: state.faves
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    hideAlbumDetails: () => {
      dispatch(hideAlbumDetails());
    },
    faveAlbum: (id) => {
      dispatch(faveAlbum(id));
    }
  }
};

var AlbumDetails = React.createClass({
  hideAlbumDetails(e) {
    // Don't hide the form if user clicks the buy button or favorite button
    if(e.target.className !== "album-details-buy-button" && e.target.className !== "fa fa-heart") {
      this.props.hideAlbumDetails();
    }
  },
  componentDidMount: function () {
    window.addEventListener('click', this.hideAlbumDetails, true);
    window.addEventListener('keyup', (e) => {
      if(e.keyCode === 27) {
        this.hideAlbumDetails(e);
      }
    }, false);
  },
  render() {
    var { align, faves, id } = this.props;
    var containerClassName = `album-details album-details-${align}`;
    var isFaved = _.includes(faves, id);
    var heartStyles = {
      cursor: "pointer",
      opacity: isFaved ? '1' : '.3',
      color: isFaved ? '#2ecc71' : '#000',
      marginLeft: "10px"
    };
    
    return (
      <div className={containerClassName}>
        <div className="album-details-click-to-hide">
          x
        </div>
        <div className="album-details-info-block">
          <h6 className="album-details-header">Category</h6>
          <p className="album-details-info-content">{this.props.category}</p>
        </div>
        <div className="album-details-info-block">
          <h6 className="album-details-header">Release Date</h6>
          <p className="album-details-info-content">{this.props.releaseDate}</p>
        </div>
        <div className="album-details-info-block album-details-info-price">
          <h6 className="album-details-header">Price</h6>
          <p className="album-details-info-content">{this.props.price}</p>
        </div>
        <div className="album-details-footer">
          <div className="album-details-buy">
            <a href={this.props.link} target="_blank" className="album-details-buy-button">
              Buy Now <i class="fa fa-money" aria-hidden="true"></i>
            </a>
            <i 
              className="fa fa-heart" 
              aria-hidden="true" 
              style={heartStyles}
              onClick={(e) => {
                e.stopPropagation();
                this.props.faveAlbum(this.props.id);
              }}></i>
          </div>
          <p className="album-details-footer-copyright">{this.props.rights}</p>
        </div>
      </div>
    );
  }
});

AlbumDetails = Redux.connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);

module.exports = AlbumDetails;