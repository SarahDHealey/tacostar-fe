import React from 'react';
import FoodItem from './FoodItem';

class FoodListContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			food: [{
				id: 1,
				name: 'Carne Asada',
				description: 'Steak, Guacamole and Mexican Salsa',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder'
			},
			{
				id: 2,
				name: 'Mixed',
				description: 'Beef, Beans, Bell Peppers, Tomatoes and Onions',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder'
			},
			{
				id: 3,
				name: 'Chile Relleno',
				description: 'Rice, Beans, Cheese and Enchilada Sauce',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder'
			},
			{
				id: 4,
				name: 'Grilled Chicken Breast',
				description: 'Sour Cream, Cheese, Lettuce and Tomato',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder'
			},
			{
				id: 5,
				name: 'Beans',
				description: '',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder'
			}]
		}
	}
	render() {
		let food = this.state.food;
		
		return (
			<div>
			<h1>menu</h1>
				{food.map(item => 
					<FoodItem key={item.id} food={item} />)}
      </div>
			)
	}
}


export default FoodListContainer;