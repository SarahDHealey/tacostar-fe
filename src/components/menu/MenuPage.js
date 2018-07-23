import React from 'react';
import MenuBanner from './MenuBanner';
import FoodListContainer from './FoodListContainer';


export default class MenuPage extends React.Component {
	render() {
		console.log(this.props.category);
		return (
			<div>
				<div align="center">
				<MenuBanner></MenuBanner>
				<div className="row menuNotificationBar"></div>
				</div>
				<div align="center">
				</div>
					<div className="container divider"><FoodListContainer category={this.props.category} /></div>				
			</div>
		)
	}
}