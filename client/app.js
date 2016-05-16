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

window.addEventListener('resize', () => {
  store.dispatch(updateGridSize(calculateGridSize(window.innerWidth)));
});

require('data/fetchInitialData')(store, render);