import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Post from './components/Post';
import Home from './components/Home';


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
	font-family: 'Bree Serif', serif;
`

const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #4844a3;
	height: 5%;
	width: 100%;
	overflow: auto;
`

const NavContents = styled.li`
	display: inline-block;
	width: 20%;
	height: 100%;
`

const NavButton = styled.div`
	height: 100%;
	font-family: 'Lora', serif;
	font-size: 1.0em;
	text-align: center;
	border-left: solid 2px #6b6f83;

	${NavButton}:hover {
		background: #6b6f83;
	}
`

const Line = styled.hr`
	background-color: #7aacd4;
	height: 2px;
	margin: 0px;
	border: none;
`;

class App extends Component {
	render() {
		return (
			<div>
				<Router basename="/blog">
				<div>
					<BannerWrapper>
						<BannerTitle>{`makeupsomethinglater's \n blog`}</BannerTitle>
					</BannerWrapper>
					<Line />
					<NavBar>
						<NavContents>
							<Link to="/" style={{textDecoration: "none", color: "#7aacd4", margin: "auto"}}><NavButton>Home</NavButton></Link>
						</NavContents>
						<NavContents>
							<Link to="/resume" style={{textDecoration: "none", color: "#7aacd4", margin: "auto"}}><NavButton>Resume</NavButton></Link>
						</NavContents>
						<NavContents>
							<Link to="/works" style={{textDecoration: "none", color: "#7aacd4", margin: "auto"}}><NavButton>What Im Working on</NavButton></Link>
						</NavContents>
					</NavBar>
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
