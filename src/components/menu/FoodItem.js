import React from 'react';

export default class FoodItem extends React.Component {

	render() {
		console.log('grrrrrrr: '+ JSON.stringify(this.props.food))
		return(
			<div className="card-body">
			{
				this.props.food.map(item => 
					<div key={item.id} className="card col-md-12">
						<div xs={12}>
							<h6>{item.name}</h6>
						</div>
						<div className="card-block">
							<div className="row">
								<div className="col-md-8">						
									<p className="small">{item.description}</p>
								</div>
								<div className="col-md-4">{item.price}</div>
							</div>
						</div>
					</div>)}
			</div>
		)
	}
};