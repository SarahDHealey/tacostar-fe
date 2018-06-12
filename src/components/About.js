import React from 'react'
import GlobalNav from './GlobalNav';

//stateless component
const About = (props) => {
  return(
		<div>
				<GlobalNav />
				<h1 className="text-center page-title">About</h1>
				<p>
				About Taco Star				
				</p>
			</div>
  )
};

export default About