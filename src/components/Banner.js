import React from 'react';
import BannerImage from './BannerImage';
import BannerText from './BannerText';



export default class Banner extends React.Component {
	
	render() {
		return (
			<div>
			<BannerImage>
			<BannerText> TITLE
			</BannerText>
			</BannerImage>
			</div>
		)
	}
}