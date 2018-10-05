import React from 'react';

export default class LocationDetail extends React.Component {
	
	render() {
		return (
			<div>
			<div className="row bumper">
				<div className="row justify-content-left">
					<div className="col-sm-7 main-review-left">
						<h4 className="review-page-title">Local family-owned restaurant chain providing fresh flavor packed mexican food 24/7</h4>
						<div className="review-page-subtitle col-sm-10">
							<p>A fresh salsa bar, quick food that tastes great and surprisingly professional service make Taco Star a welcome addition to Havana Street's busy restaurant scene, whether you’re craving late-night Mexican staples after a night out or stopping by for a sober mid-day meal. &emsp;- Westward</p>
						</div>
					</div>
					<div className="col-sm-4 main-review-right">
						<h3>Hours</h3>
						<h3>24/7</h3>
						<p>Enjoy Great Mexican Food at Anytime</p>
					</div>
				</div>
				</div>
			</div>
		)
	}
}
