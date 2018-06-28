import React from 'react';
import HomeBanner from './HomeBanner';
import MainReview from './MainReview';


export default class Main extends React.Component {
	
	render() {
		return (
			<div>
				<HomeBanner />
				<MainReview></MainReview>
			</div>
		)
	}
}

				// <img className="main-banner-img" src="images/chopped-veggies-banner-3.jpg" alt="Responsive image"/>
				// <img className="main-banner-img" src="images/banner-image-example.jpg" alt="Responsive image"/>
				// <img className="main-banner-img" src="images/banner-ingredients-option-2.jpg" alt="Responsive image"/>

