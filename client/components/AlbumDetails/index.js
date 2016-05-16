var React = require('react');
var Redux = require('react-redux');
var hideAlbumDetails = require('actions/hideAlbumDetails');

var styles = require('./styles.scss');

var mapDispatchToProps = (dispatch) => {
  return {
    hideAlbumDetails: () => {
      dispatch(hideAlbumDetails());
    }
  }
};

var AlbumDetails = React.createClass({
  hideAlbumDetails(e) {
    this.props.hideAlbumDetails();
  },
  componentDidMount: function () {
    window.addEventListener('click', this.hideAlbumDetails, true);
  },
   render() {
     return (
      <div className="album-details">
        <div className="album-details-header">
          <div className="album-details-name">
            {this.props.name}
          </div>
          <div className="album-details-artist">
            {this.props.artist}
          </div>
          <div className="album-details-buy">
            <a class="button button-main" href={this.props.link}>Buy Now <i class="fa fa-money" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="album-details-info-block">
          <h6 class="albums-details-header">Category</h6>
          {this.props.category}
        </div>
        <div className="album-details-info-block">
          <h6 class="albums-details-header">Release Date</h6>
          {this.props.releaseDate}
        </div>
        <div className="album-details-info-block">
          <h6 class="albums-details-header">Price</h6>
          {this.props.price}
        </div>
        <div className="album-details-copyright">
          {this.props.rights}
        </div>
      </div>
    );
   }
});

AlbumDetails = Redux.connect(null, mapDispatchToProps)(AlbumDetails);

module.exports = AlbumDetails;