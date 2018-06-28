import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import $ from 'jquery';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

window.jQuery = $;
window.$ = $;

ReactDOM.render(
	<AppRouter />,
  document.getElementById('app')
);