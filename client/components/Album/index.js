var React = require('react');
var styles = require('./styles.scss');

var Album = React.createClass({
  render() {
    var { cover, title } = this.props;
    var [name, artist] = title.split('-');
    var conditionalStyles = {
      backgroundImage: 'url(' + cover + ')'
    };
    return (
      <div className="album-container">
        <div className="album-art" style={conditionalStyles}>
        </div>
        <div className="album-content">
          <h3 className="album-name">{name}</h3>
          <span className="album-artist">{artist}</span>
        </div>
      </div>
    )
  }
});

module.exports = Album;