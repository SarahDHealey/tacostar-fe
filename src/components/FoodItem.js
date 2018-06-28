import React from 'react';

const FoodItem = (props) => {
  return(
		<div className='item' xs={12} md={8}>
			<h4>{props.food.name}</h4>
			{props.food.description}
			&emsp;&emsp;${props.food.price}
		</div>
  )
};

export default FoodItem