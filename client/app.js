var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('react-redux');
var { Provider } = Redux;

var Header = require('containers/HeaderContainer');
var MainWindowContainer = require('containers/MainWindowContainer');
var Styles = require('scss/style.scss');

var store = require('store');

var render = () => ReactDOM.render(
  <Provider store={store}>
		<div className="application">
			<Header />
			<MainWindowContainer />
		</div>
  </Provider>,
  document.getElementById('application')
);

render();

require('data/fetchInitialData')(store, render);