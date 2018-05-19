import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Post from './components/Post';

const Home = () => (
	<div>
    	<h2>Home</h2>
  	</div>
)

const About = () => (
	<div>
    	<h2>About</h2>
  	</div>
)

class App extends Component {
	render() {
		return (
			<div>
				<Router basename="/blog">
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/posts/1">Latest post</Link></li>
						<li><Link to="/posts/2">Other post</Link></li>
					</ul>

					<hr/>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/posts/:postId" component={Post}/>
				</div>
				</Router>
			</div>
    	);
  	}
}

export default App;
