var React = require('react');
var Redux = require('react-redux');
var styles = require('./styles.scss');
var updateFilter = require('actions/updateFilter');

var AVAILABLE = ['Albums', 'Songs'];

var mapStateToProps = (state) => {
  return {
    activeFilter: state.currentFilter
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    onClickFilterLink: (newFilterValue) => {
      dispatch(updateFilter(newFilterValue))
    }
  }
};

var GlobalFilterDropdown = (props) => {
  var { dispatch, activeFilter, onClickFilterLink } = props;
  return (
    <div className="global-filter-dropdown">
      <div className="global-filter-dropdown-current">
        {activeFilter}
      </div>
      <div className="global-filter-dropdown-menu">
      {AVAILABLE.map((filterValue, i) => {
        return (<li key={i} onClick={(e) => {
          onClickFilterLink(filterValue)
        }}>{filterValue}</li>)
      })}
      </div>
    </div>
  );
};

GlobalFilterDropdown = Redux.connect(mapStateToProps, mapDispatchToProps)(GlobalFilterDropdown);

module.exports = GlobalFilterDropdown;