import React from 'react';

export default class MenuBanner extends React.Component {
	
	render() {
		return (
			<div className="menu-banner-container">
				<img className="menu-banner-img" src="images/burritoBanner.png" alt="Responsive image"/>

				<h2 className="menu-title">MENU</h2>
			</div>
		)
	}
}