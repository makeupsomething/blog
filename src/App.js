import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Post from './components/Post';
import PostList from './components/PostList';
import Resume from './components/Resume';
import Works from './components/Works';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const BannerWrapper = styled.header`
	top: 0px;
	height: 25%;
`

const BannerTitle = styled.h1`
	color: #4844a3;
	font-size: 5em;
	hyphens: auto;
	width: 90%;
	margin: auto;
	font-family: 'Bree Serif', serif;
`

const NavBar = styled.ul`
    list-style-type: none;
    margin: auto;
	margin-top: 10px;
	width: 90%;
	height: 25px;
	overflow: auto;
	padding: 0;
`

const NavContents = styled.li`
	display: inline-block;
	height: 100%;
	margin-right: 15px;
	text-decoration: underline;
	font-family: 'Lora', serif;
`

const NavButton = styled.div`
	height: 100%;
	font-family: 'Lora', serif;
	font-size: 1.1em;
	text-align: center;

	:hover {
		background: #6b6f83;
	}
`

const Main = styled.main`
	margin-bottom: 200px;
`

const Footer = styled.footer`
    position: static;
 	bottom:0;
 	left:0;
    background: #1d1e28;
    height: 100px;
    width: 100%;
	border-top: solid 2px #7aacd4;
`

//TODO: overscroll-behavior check this out

class App extends Component {
	render() {
		return (
			<div>
				<Router basename="/blog" onUpdate={() => window.scrollTo(0, 0)}>
				<div>
					<BannerWrapper>
						<BannerTitle>{`makeupsomethinglater's \n blog`}</BannerTitle>
					</BannerWrapper>
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
					<Main>
						<Route exact path="/" component={PostList}/>
						<Route path="/resume" component={Resume}/>
						<Route path="/works" component={Works}/>
						<Route path={`/posts/:postLink`} component={Post}/>
					</Main>
					<Footer>
						<a href="https://github.com/makeupsomething">
							<FontAwesomeIcon icon={faGithub} size="3x"  pull="right" inverse />
						</a>
						<a href="https://www.linkedin.com/in/daryl-cole/">
							<FontAwesomeIcon icon={faLinkedin} size="3x"  pull="right" inverse />
						</a>
					</Footer>
				</div>
				</Router>
			</div>
    	);
  	}
}

export default App;
