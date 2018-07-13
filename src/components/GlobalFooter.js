import React from 'react';
import { Link } from 'react-router-dom';

export default class GlobalFooter extends React.Component {
	render() {
		return (
			<div>
				<footer className="footer-distributed">

					<div className="footer-left">

						<h3>TACO STAR</h3>

						<p className="footer-links">
							<a href="#">Home</a>
							·
							<a href="#">Food</a>
							·
							<a href="#">Locations</a>
							·
							<a href="#">Specials</a>
							·
							<a href="#">About</a>
						</p>

						<p className="footer-company-name">&copy; {(new Date().getFullYear())} Copyright: Taco Star LLC</p>
					</div>


					<div className="footer-center">
						<p className="footer-company-about">
							<span>About the company</span>
							Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
						</p>
						<div className="footer-center">
							<p><a href="support@tacostardining.com">support@tacostardining.com</a></p>
						</div>
					</div>

					<div className="footer-right">
						<div>
							<form action="#" method="post">
							<input type="text" name="email" placeholder="Email" />
							<textarea name="message" placeholder="Message"></textarea>
							<button>Send</button>
							</form>
						</div>
					</div>
				</footer>
			</div>
		)
	}
}

