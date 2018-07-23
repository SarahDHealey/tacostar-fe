import React from 'react';
import MenuPage from './MenuPage';



const MenuPageWrapper = (props) => {
	console.log('foodlistcontainer: '+JSON.stringify(props.match.params.category))
	const category = props.match.params.category;
	return(
		<div>
			<MenuPage category={category}></MenuPage>
		</div>
	);
}

export default MenuPageWrapper;