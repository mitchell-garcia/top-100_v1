var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('components/Header');
var Styles = require('scss/style.scss');
var Albums = require('data/albums');
var Songs = require('data/songs');

var store = require('state');

Albums.then((success) => {
	let response = JSON.parse(success);
	store.dispatch({
		type: 'DATA_FETCH',
		data: response,
		namespace: 'albums'
	});
}).catch((e) => {
	console.log(e);
});

Songs.then((success) => {
	let response = JSON.parse(success);
	store.dispatch({
		type: 'DATA_FETCH',
		data: response,
		namespace: 'songs'
	});
}).catch((e) => {
	console.log(e);
})

var render = () => ReactDOM.render(
  <Header 
  	store={store.getState()} 
  	onDecrement={
  		() => store.dispatch({
  			type: 'CLICK_LOGO',
  			text: 'OK'
  		})
  	}
	/>,
  document.getElementById('application')
);

render();