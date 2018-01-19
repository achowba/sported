import React, { Component } from 'react';

// components
import Header from './Header';
import TopStories from './TopStories';
import Articles from './Articles';

class App extends Component {

  	render() {
		return (
			<div>
				<Header/>
				<TopStories/>
				<Articles/>
			</div>
		);
  	}
}

export default App;
