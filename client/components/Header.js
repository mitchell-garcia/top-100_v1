var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<span className="logo-mark">
					<img src={require("brand/mark.svg")} alt="Top 100 Logo" />
				</span>
				<span className="logo-type">
					Top 100
				</span>
				<span className="logo-filter-select">
					{this.props.store.current_filter}
				</span>
			</div>
		);
	}
});

module.exports = Header;