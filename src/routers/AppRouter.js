import React from 'react';
import Main from '../components/Main';
import About from '../components/About';
import MenuPage from '../components/MenuPage';
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
					<Route exact path="/food" component={MenuPage} />
					<Route exact path="/about" component={About} />
					<Route component={NotFound} />
			</Switch>
			<GlobalFooter />
		</div>
	</BrowserRouter>
)

export default AppRouter;