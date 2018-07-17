import React from 'react';
import MenuBanner from './MenuBanner';
import BurritoListContainer from './BurritoListContainer';
import TacoListContainer from './TacoListContainer';

export default class MaMenuPage extends React.Component {
	
	render() {
		return (
			<div>
				<div align="center">
				<MenuBanner></MenuBanner>
				<div className="row menuNotificationBar"></div>
				</div>
				<div align="center">
				</div>
					<div className="container divider"><BurritoListContainer /></div>
					<div className="container divider"><TacoListContainer /></div>
					<div className="container divider"><TacoListContainer /></div>
					<div className="container divider"><TacoListContainer /></div>
			</div>
		)
	}
}