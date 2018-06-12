import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import $ from 'jquery';
import About from './components/About';
import NotFound from './components/NotFound';
import GlobalNav from './components/GlobalNav';
import {Link, Switch, BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import Bootstrap from 'bootstrap/scss/bootstrap.scss'
import './styles/styles.scss';


window.jQuery = $;
window.$ = $;


// import { Foundation } from 'foundation-sites/js/foundation.core';
// import { Tooltip } from 'foundation-sites/js/foundation.tooltip';
// import { Box } from 'foundation-sites/js/foundation.util.box';

// Foundation.addToJquery($);
// $(document).foundation();



const routes = (
	<BrowserRouter>
		<div>
			<GlobalNav />
			<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/about" component={About} />
					<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
)

ReactDOM.render(
	routes,
  document.getElementById('app')
);