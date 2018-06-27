import React from 'react';
import { Link } from 'react-router-dom';


export default class GlobalFooter extends React.Component {
	render() {
		return (
			<div>
			<footer>
				<div className="footer-container">
					<div className="row justify-content-center offset-sm-1">
							<div className="col-sm-2">
								<h4>Taco Star</h4>
								<p>You can find Taco Star locations in the Denver area and in Colorado Springs. We have over 10 locations in the state of Colorado</p>
							</div>
							<div className="col-sm-2 footer-links">
								<Link to="#!">CONTACT US</Link>
							</div>
							<div className="col-sm-2 footer-links">
								<Link to="#!">ABOUT US</Link>
							</div>
							<div className="col-sm-2 footer-links">
								<Link to="#!">LOCATIONS</Link>
							</div>
							<div className="col-sm-2 footer-links">
								<Link to="#!">CAREERS</Link>
							</div>
					</div>
					</div>
					<div>
					<container className="copyright-well" align="center">
							<p className="copyright">&copy; {(new Date().getFullYear())} Copyright: Taco Star LLC</p>
					</container>
			</div>
				</footer>
			</div>
		)
	}
}