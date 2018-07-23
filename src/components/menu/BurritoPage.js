import React from 'react';
import MenuBanner from './MenuBanner';
import BurritoListContainer from '../menu/BurritoListContainer';

export default class BurritoPage extends React.Component {
	
	render() {
		return (
			<div>
				<div align="center">
				<MenuBanner></MenuBanner>
				<div className="row menuNotificationBar"></div>
				</div>
				<div align="center">
				</div>
					<div className="food-category">BURRITOS</div>
					<div className="container divider"><BurritoListContainer /></div>
			</div>
		)
	}
}