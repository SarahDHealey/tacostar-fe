import React from 'react';
import MenuBanner from './MenuBanner';
import FoodListContainer from './FoodListContainer';


export default class MenuPage extends React.Component {
	render() {
		console.log(this.props.category);
		console.log(this.props.categoryImage);

		return (
			<div>
				<div align="center">
				<MenuBanner category={this.props.category || 'menu'}></MenuBanner>
				<div className="row menuNotificationBar"></div>
				</div>
				<div align="center">
				</div>
					<div className="container divider"><FoodListContainer category={this.props.category} /></div>				
			</div>
		)
	}
}