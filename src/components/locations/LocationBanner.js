import React from 'react';

export default class LocationBanner extends React.Component {
	
	render() {
		let name = this.props.match.params.name;

		var sectionStyle = {
			width: "100vw",
			height: "100vh",
			backgroundImage: `https://s3-us-west-1.amazonaws.com/tacostar/${name}.png`
		};

		return (
			<div style={sectionStyle}>
			</div>
		)
	}
}
