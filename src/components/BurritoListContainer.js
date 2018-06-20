import React from 'react';
import FoodItem from './FoodItem';
import FoodCategory from './FoodCategory';


class BurritoListContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			food: [{
				id: 1,
				name: 'Carne Asada',
				description: 'Steak, Guacamole and Mexican Salsa',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '6.24'
			},
			{
				id: 2,
				name: 'Mixed',
				description: 'Beef, Beans, Bell Peppers, Tomatoes and Onions',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '5.79'
			},
			{
				id: 3,
				name: 'Chile Relleno',
				description: 'Rice, Beans, Cheese and Enchilada Sauce',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '5.74'
			},
			{
				id: 4,
				name: 'Grilled Chicken Breast',
				description: 'Sour Cream, Cheese, Lettuce and Tomato',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '6.24'
			},
			{
				id: 5,
				name: 'Beans',
				description: '',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '4.74'
			}]
		}
	}
	render() {
		let food = this.state.food;
		
		return (
			<div>
		  <FoodCategory />
			<h1>menu</h1>
				<div className="container">
					{food.map(item => 
						<FoodItem key={item.id} food={item} />)}
				</div>
			</div>
			)
	}
}


export default BurritoListContainer;