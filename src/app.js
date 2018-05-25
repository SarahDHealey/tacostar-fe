import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import $ from 'jquery';
import About from './components/About';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Bootstrap from 'bootstrap/scss/bootstrap.scss'

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
		<Route path="/" component={Main} exact={true} />
		<Route path="/About" component={About} exact={true} />
	</div>
	</BrowserRouter>
)

ReactDOM.render(
	routes,
  document.getElementById('app')
);