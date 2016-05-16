var React = require('react');
var Redux = require('react-redux');
var updateSearchQuery = require('actions/updateSearchQuery');

var styles = require('./styles.scss');

var GlobalSearch = ({dispatch}) => {
  return (
    <div className="global-search-container">
      <i className="fa fa-search global-search-icon" aria-hidden="true"></i>
      <input type="text" 
        className="global-search-form" 
        onChange={
          (e) => {
            dispatch(updateSearchQuery(e.target.value));
          }
        } 
        placeholder="Search" />
    </div>
  )
}

GlobalSearch = Redux.connect()(GlobalSearch);

module.exports = GlobalSearch;