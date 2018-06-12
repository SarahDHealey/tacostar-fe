import React from 'react'
import GlobalNav from './GlobalNav';
import {Link} from 'react-router-dom';


//stateless component
const About = (props) => {
  return(
		<div>
			<h1 className="text-center page-title">404 - Page Not Found</h1>
			<h3 className="text-center page-subtitle">
				return to <Link to="/">Homepage</Link>		
			</h3>
		</div>
  )
};

export default About