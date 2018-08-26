import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Post from './components/Post';
import Home from './components/Home';
import Resume from './components/Resume';
import Works from './components/Works';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//library.add(faGithub);

const BannerWrapper = styled.header`
	top: 0px;
	background: #1d1e28;
	height: 25%;
	padding: 10px 0px;
`

const BannerTitle = styled.h1`
	color: #4844a3;
	font-size: 6em;
	hyphens: auto;
	width: 90%;
	margin: auto;
	font-family: 'Bree Serif', serif;
`

const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #4844a3;
	width: 100%;
	height: 25px;
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
	font-size: 1.1em;
	text-align: center;

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

const Footer = styled.footer`
    position: static;
    background: #1d1e28;
    height: 100px;
    width: 100%;
	bottom: 0px;
	border-top: solid 2px #7aacd4;
	margin-top: 100px;
`

class App extends Component {
	render() {
		return (
			<div>
				<Router basename="/blog" onUpdate={() => window.scrollTo(0, 0)}>
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
							<Link to="/works" style={{textDecoration: "none", color: "#7aacd4", margin: "auto"}}><NavButton>Projects</NavButton></Link>
						</NavContents>
					</NavBar>
					<Line />
					<main>
						<Route exact path="/" component={Home}/>
						<Route path="/resume" component={Resume}/>
						<Route path="/works" component={Works}/>
						<Route path={`/posts/:postLink`} component={Post}/>
					</main>
					<Footer>
						<FontAwesomeIcon icon={faGithub} size="3x"  pull="right" inverse />
						<FontAwesomeIcon icon={faLinkedin} size="3x"  pull="right" inverse />
					</Footer>
				</div>
				</Router>
			</div>
    	);
  	}
}

export default App;
