import React from 'react';

export default class LocationMain extends React.Component {
	
	render() {
		let name = this.props.match.params.name;
		let background = `https://s3-us-west-1.amazonaws.com/tacostar/${name}.png`;
		return (
			<div>
				<div className="location-banner" style={{backgroundImage: "url(" + background + ")"}}>
					<div className="box-layout">
						<div className="content-layout">
							<div className="thing1">
								<h1>{name}</h1>
								<p>2020 Main St, Longmont, CO 80501</p>
							</div>
							<div className="thing2">
							<img src="https://s3-us-west-1.amazonaws.com/tacostar/longmont-map.png" width="70%"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

