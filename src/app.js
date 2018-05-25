import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import $ from 'jquery';
import About from './components/About';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
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
			<Route exact path="/" component={Main} />
			<Route exact path="/About" component={About} />
	</div>
	</BrowserRouter>
)

ReactDOM.render(
	routes,
  document.getElementById('app')
);