var React = require('react');
var styles = require('./styles.scss');

var GlobalSearch = require('components/GlobalSearch');
var GlobalFilterDropdown = require('components/GlobalFilterDropdown');

var Header = React.createClass({
	render() {
			return (
			<div className="header">
				<div className="row">
					<div className="logo-mark">
						<img src={require("brand/mark.svg")} alt="Top 100 Logo" />
					</div>
					<div className="logo-type">
						Top 100
					</div>
					<GlobalFilterDropdown />
					<GlobalSearch />					
				</div>
			</div>
		);
	}
});

module.exports = Header;