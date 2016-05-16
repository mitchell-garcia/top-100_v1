var React = require('react');
require('./styles.scss');

var Song = React.createClass({
  render() {
    var { cover, title, thumbnail, number, isSearching } = this.props;
    number = number + 1;
    var [name, artist] = title.split('-');
    var conditionalStyles = {
      backgroundImage: 'url(' + cover + ')',
      backgroundSize: 'cover'
    };
    var isTopTen = number <= 10;
    var layout = isTopTen ? "song song-featured song-featured-" + number : "song song-list";
    return (
      <div className={layout}>
        {
          (() => {
            if(!isSearching) {
              return (
                <div className="song-number">
                  {number}
                </div>
              ) 
            }
          })()}
        <div className="song-thumbnail-container" style={conditionalStyles}>
        </div>
        <div className="song-information-container">
          <div className="song-name">{name}</div>
          <div className="song-artist">{artist}</div>
        </div>
      </div>
    )
  }
});

module.exports = Song;