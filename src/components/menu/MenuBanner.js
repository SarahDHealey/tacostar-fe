import React from 'react';

export default class MenuBanner extends React.Component {
	
	render() {
		console.log(`https://s3-us-west-1.amazonaws.com/tacostar/${this.props.category}.jpg`)
		return (
			<div className="menu-banner">
				<img src={`https://s3-us-west-1.amazonaws.com/tacostar/${this.props.category}.jpg`} alt="Responsive image"/>
				<h2>{this.props.category.replace("-"," ")}</h2>
			</div>
		)
	}
}