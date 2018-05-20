import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Post from './components/Post';
import {Files as files} from './markdown';

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

const BannerWrapper = styled.div`
	top: 0px;
	background: #1d1e28;
	height: 25%;
	padding: 10px 0px;
`

const BannerTitle = styled.h1`
	color: #4844a3;
	font-size: 6em;
	word-wrap: break-word;
	padding: 10px 0px;
`

const Line = styled.hr`
	background-color: #7aacd4;
	height: 2px;
	margin: 0px;
`;

class App extends Component {
	state = {
        posts: [],
    }

	componentDidMount = () => {
		this.setState({posts: files.files});
	}

	render() {
		return (
			<div>
				<Router basename="/blog">
				<div>
					<BannerWrapper>
						<BannerTitle>{`makeupsomethinglater's \n blog`}</BannerTitle>
					</BannerWrapper>
					<Line />
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						{this.state.posts.map((post, index) => {
							return <li><Link to={`/posts/${index}`}>{post.title}</Link></li>
						})}
					</ul>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path={`/posts/:postId`} component={Post}/>
				</div>
				</Router>
			</div>
    	);
  	}
}

export default App;
