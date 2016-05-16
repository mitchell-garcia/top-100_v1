var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('react-redux');
var { Provider } = Redux;

var HeaderContainer = require('containers/HeaderContainer');
var MainWindowContainer = require('containers/MainWindowContainer');
var Styles = require('scss/style.scss');

var updateGridSize = require('actions/updateGridSize');
var calculateGridSize = require('util/calculateGridSize');

var store = require('store');

var render = () => ReactDOM.render(
  <Provider store={store}>
		<div className="application">
			<HeaderContainer />
			<MainWindowContainer />
		</div>
  </Provider>,
  document.getElementById('application')
);

render();


// Check screen size initially + add global event listener to resize 
// when screen size changes
var updateWindowSize = () => {
  store.dispatch(updateGridSize(calculateGridSize(window.innerWidth)));
};

updateWindowSize();
window.addEventListener('resize', updateWindowSize);

require('data/fetchInitialData')(store, render);