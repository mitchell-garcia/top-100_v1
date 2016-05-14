var React = require('react');
var Redux = require('react-redux');
var updateSearchQuery = require('actions/updateSearchQuery');
var styles = require('./styles.scss');

var GlobalSearch = ({dispatch}) => {
  return (
		<input type="text" 
       className="global-search" 
       onChange={
         (e) => {
           dispatch(updateSearchQuery(e.target.value));
         }
       } 
      placeholder="Type here" />
  )
}

GlobalSearch = Redux.connect()(GlobalSearch);

module.exports = GlobalSearch;