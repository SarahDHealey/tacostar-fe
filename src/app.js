import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import $ from 'jquery';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


window.jQuery = $;
window.$ = $;


// import { Foundation } from 'foundation-sites/js/foundation.core';
// import { Tooltip } from 'foundation-sites/js/foundation.tooltip';
// import { Box } from 'foundation-sites/js/foundation.util.box';

// Foundation.addToJquery($);
// $(document).foundation();

ReactDOM.render(
	<AppRouter />,
  document.getElementById('app')
);