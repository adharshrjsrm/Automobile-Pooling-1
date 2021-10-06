import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div>
			   <Map
     google={this.props.google}
     center={{lat: 12.9598291, lng: 80.2403913}}
     height='300px'
     zoom={15}
    />
			</div>
		);
	}
}

export default Home;