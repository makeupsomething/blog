import React, { Component } from 'react';
import styled from 'styled-components';
import {Files as files} from '../markdown';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
	color: #1d1e28;
	height: 25%;
    width: 75%;
    margin: auto;
    align-content: center;
`

const BannerTitle = styled.h1`
	color: #4844a3;
	font-size: 6em;
	word-wrap: break-word;
	padding: 10px 0px;
    font-family: 'Bree Serif', serif;
`

const SecondaryTitle = styled.h2`
	color: #7aacd4;
	font-size: 3em;
	word-wrap: break-word;
	padding: 10px 0px;
    font-family: 'Lora', serif;
`

class Home extends Component {
    state = {
        posts: [],
    }

	componentDidMount = () => {
		this.setState({posts: files.files});
    }
    
    render() {
        return (
            <HomeWrapper>
                <BannerTitle>Hi, Welcome to my blog, resume thing</BannerTitle>
                <SecondaryTitle>Check out some things I've written recently</SecondaryTitle>
                {this.state.posts.map((post, index) => {
                    return <div><Link to={`/posts/${index}`} style={{textDecoration: "none"}}>{post.title}</Link></div>
                })}
            </HomeWrapper>
        )
    }
}

export default Home;