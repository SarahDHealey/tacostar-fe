import React from 'react';
import MenuBanner from './MenuBanner';
import BurritoListContainer from './BurritoListContainer';
import TacoListContainer from './TacoListContainer';

export default class MaMenuPage extends React.Component {
	
	render() {
		return (
			<div>
				<MenuBanner></MenuBanner>
				<div align="center">
					<h3 className="menu-page-title">menu</h3>
				</div>
				<div className="col-sm-4"><BurritoListContainer /></div>
				<div className="col-sm-4"><TacoListContainer /></div>
				<div className="col-sm-4"><TacoListContainer /></div>
				<div className="col-sm-4"><TacoListContainer /></div>
			</div>
		)
	}
}