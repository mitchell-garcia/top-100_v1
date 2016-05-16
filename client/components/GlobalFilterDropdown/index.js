var React = require('react');
var Redux = require('react-redux');
var updateFilter = require('actions/updateFilter');
var toggleGlobalFilterDropdown = require('actions/toggleGlobalFilterDropdown');

var styles = require('./styles.scss');

var AVAILABLE = ['Albums', 'Songs'];

var mapStateToProps = (state) => {
  return {
    activeFilter: state.currentFilter,
    isDropdownVisible: state.isGlobalFilterDropdownVisible
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    onClickFilterLink: (newFilterValue) => {
      dispatch(updateFilter(newFilterValue));
      dispatch(toggleGlobalFilterDropdown(false));
    },
    toggleDropdown: (toShowOrNotToShow = true) => {
      dispatch(toggleGlobalFilterDropdown(toShowOrNotToShow));
    }
  }
};

var GlobalFilterDropdown = React.createClass({
  hideDropdownIfVisible(e) {
    if(this.props.isDropdownVisible) {
      this.props.toggleDropdown(false);
    }
  },
  componentDidMount: function () {
    window.addEventListener('click', this.hideDropdownIfVisible, true);
  },
  render() {
    var { dispatch, activeFilter, onClickFilterLink, toggleDropdown, isDropdownVisible } = this.props;
    var containerClassName = isDropdownVisible ? "global-filter-dropdown show-dropdown" : "global-filter-dropdown";
    return (
      <div className={containerClassName}>
        <div className="global-filter-dropdown-current" onClick={
          (e) => {
            e.stopPropagation();
            toggleDropdown(true)
          }}>
          {activeFilter} <i className="fa fa-caret-down" aria-hidden="true"></i>
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
  }
});

GlobalFilterDropdown = Redux.connect(mapStateToProps, mapDispatchToProps)(GlobalFilterDropdown);

module.exports = GlobalFilterDropdown;