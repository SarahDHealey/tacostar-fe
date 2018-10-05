import React from 'react';
import FoodItem from './FoodItem';
import FoodData from './FoodData';


class FoodListContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			food: FoodData,
		}
	}
	render() {
		const foodData = this.state.food;
		const category = this.props.category;
		console.log('dynamic category:'+category)
		
		return (
			<div>
				<div>
				<div className="container food-category"><img className="burrito-category"/>{category}</div>
				</div>
				<div className="card-columns col-md-12">
					{
						foodData.filter(function(foodListObj) {
							console.log('hi: '+foodListObj.category);
							return (foodListObj.category == category);
						})
						.map(menuList => 
						<div key={menuList.id}><FoodItem key={menuList.id} food={menuList.items}/></div>)}
				</div>
			</div>
			)
	}
}

export default FoodListContainer;


