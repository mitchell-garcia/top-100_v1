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
    // Don't hide the form if user clicks the buy button
    if(e.target.className !== "album-details-buy-button") {
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
    var { align } = this.props;
    var containerClassName = `album-details album-details-${align}`;
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
          </div>
          <p className="album-details-footer-copyright">{this.props.rights}</p>
        </div>
      </div>
    );
  }
});

AlbumDetails = Redux.connect(null, mapDispatchToProps)(AlbumDetails);

module.exports = AlbumDetails;