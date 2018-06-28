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
				</div>
				<div align="center">
					<h3 className="menu-page-title">menu</h3>
				</div>
					<div className="container"><BurritoListContainer /></div>
					<div className="container"><TacoListContainer /></div>
					<div className="container"><TacoListContainer /></div>
					<div className="container"><TacoListContainer /></div>
			</div>
		)
	}
}