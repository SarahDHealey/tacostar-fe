import React from 'react';
import GlobalNav from './GlobalNav';
import { Button } from 'react-bootstrap';

export default class Main extends React.Component {
	
	render() {
		return (
			<div>
				<p>This is my main component</p>
				<GlobalNav />
				<Button bsStyle="success">Click Me</Button>
			</div>
		)
	}
}

