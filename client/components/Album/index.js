var React = require('react');
var styles = require('./styles.scss');

var Album = React.createClass({
  render() {
    return (
      <div className="album">
        <div className="album-name">{album.name}</div>
      </div>
    )
  }
});

module.exports = Album;