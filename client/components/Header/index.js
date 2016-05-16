var React = require('react');

var GlobalSearch = require('components/GlobalSearch');
var GlobalFilterDropdown = require('components/GlobalFilterDropdown');
var styles = require('./styles.scss');

var Header = React.createClass({
	render() {
			var { onClickLogo } = this.props; 
			return (
			<div className="header">
				<div className="row">
					<div className="logo-mark">
						<img src={require("brand/mark.svg")} alt="Top 100 Logo" onClick={(e) => {
							onClickLogo();
						}}/>
					</div>
					<div className="logo-type" onClick={(e) => {
							onClickLogo();
						}}>
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