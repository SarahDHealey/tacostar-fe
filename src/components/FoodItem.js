import React from 'react';

const FoodItem = (props) => {
  return(
		<div>
			{props.food.name}
		</div>
  )
};

export default FoodItem