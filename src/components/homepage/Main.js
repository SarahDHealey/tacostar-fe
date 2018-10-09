import React from 'react';
import HomeBanner from './HomeBanner';
import MainReview from './MainReview';


export default class Main extends React.Component {
	
	render() {
		return (
			<div>
				<HomeBanner />
				<MainReview/>
			</div>
		)
	}
}

