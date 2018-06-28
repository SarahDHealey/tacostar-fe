import React from 'react';
import FoodItem from './FoodItem';


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
				name: 'Colorado',
				description: 'Potatoes, Steak, Cheese and Mexican Salsa',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '6.24'
			},
			{
				id: 3,
				name: 'Mixed',
				description: 'Beef, Beans, Bell Peppers, Tomatoes and Onions',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '5.79'
			},
			{
				id: 4,
				name: 'Chimichanga',
				description: 'Rice, Beans, Cheese and Enchilada Sauce',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '7.29'
			},
			{
				id: 5,
				name: 'Supreme',
				description: 'Beans, Rice, Cheese, Sour Cream, Guacamole and Mexican Salsa',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '5.84'
			},
			{
				id: 6,
				name: 'Carnitas',
				description: 'Pork, Guacamole and Mexican Salsa',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '6.24'
			},
			{
				id: 7,
				name: 'Chile Relleno',
				description: 'Deep Fried, Beef, Beans, Cheese, Lettuce, Guacamole, Sour Cream and Mexican Salsa',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '5.74'
			},
			{
				id: 8,
				name: 'Adovado',
				description: 'Pork, Guacamole and Mexican Salsa',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '6.24'
			},
			{
				id: 9,
				name: 'Grilled Chicken Breast',
				description: 'Sour Cream, Cheese, Lettuce and Tomato',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '6.24'
			},
			{
				id: 10,
				name: 'Lengua',
				description: 'Beef Tongue, Guacamole and Mexican Salsa',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '6.24'
			},
			{
				id: 11,
				name: 'Beef',
				description: '',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '5.84'
			},
			{
				id: 12,
				name: 'Beans',
				description: '',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '4.74'
			},
			{
				id: 13,
				name: 'Fish',
				description: '',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '5.69'
			},
			{
				id: 14,
				name: 'Chicken',
				description: '',
				category: 'Burritos',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: '5.69'
			}]
		}
	}
	render() {
		let food = this.state.food;
		
		return (
			<div>
				<div>
				<div className="container food-category"><img className="burrito-category" src="images/burritoIsol.png" alt="Responsive image"/></div>
				</div>
				<div className="container food-item">
					{food.map(item => 
						<FoodItem key={item.id} food={item} />)}
				</div>
			</div>
			)
	}
}


export default BurritoListContainer;