var React = require('react');
var styles = require('./styles.scss');

var Song = React.createClass({
  render() {
    return (
      <div className="song">
        <div className="song-name">{this.props.title}</div>
      </div>
    )
  }
});

module.exports = Song;