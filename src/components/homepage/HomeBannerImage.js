import React from 'react';

export default class HomeBannerImage extends React.Component {
	
	render() {
		return (
			<div className="home-banner">
			<img src="https://s3-us-west-1.amazonaws.com/tacostar/homePageBanner.png" alt="Responsive image"/>
			<h2><span>TACO </span><span>STAR</span></h2>
			</div>
		)
	}
}