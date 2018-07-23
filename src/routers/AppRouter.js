import React from 'react';
import Main from '../components/homepage/Main';
import About from '../components/About';
import MenuPage from '../components/menu/MenuPage';
import MenuPageWrapper from '../components/menu/MenuPageWrapper';
import MapContainer from '../components/map/MapContainer';
import NotFound from '../components/NotFound';
import GlobalNav from '../components/GlobalNav';
import GlobalFooter from '../components/GlobalFooter';

import {Switch, BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<GlobalNav />
			<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/food/:category" component={MenuPageWrapper}/>
					<Route path="/food" component={MenuPage}/>
					<Route exact path="/about" component={About} />
					<Route exact path="/locations" component={MapContainer} />
					<Route component={NotFound} />
			</Switch>
			<GlobalFooter />
		</div>
	</BrowserRouter>
)

export default AppRouter;