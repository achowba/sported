import React, { Component } from 'react';

// components
import Header from './Header';
import TopStories from './TopStories';

class App extends Component {

  	render() {
		return (
			<div>
				<Header/>
				<TopStories/>
				Sported
			</div>
		);
  	}
}

export default App;
