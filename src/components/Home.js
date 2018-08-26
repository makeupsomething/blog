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
	font-size: 2.5em;
	word-wrap: break-word;
	padding: 10px 0px;
    font-family: 'Bree Serif', serif;
`

const SecondaryTitle = styled.h2`
	color: #7aacd4;
	font-size: 1.5em;
	word-wrap: break-word;
	padding: 10px 0px;
    font-family: 'Lora', serif;
`

class Home extends Component {
    state = {
        posts: [],
    }

	componentDidMount = () => {
        files.files = files.files.sort((x, y) => {
            return new Date(y.date) - new Date(x.date);
        });
		this.setState({posts: files.files});
    }
    
    render() {
        return (
            <HomeWrapper>
                <BannerTitle>Hi, Welcome to my blog</BannerTitle>
                <SecondaryTitle>🚧🚨Under construction!🚨🚧</SecondaryTitle>
                <SecondaryTitle>Check out some things I've written recently</SecondaryTitle>
                {this.state.posts ? 
                this.state.posts.map((post, index) => {
                    return <div key={index}>
                    <Link to={`/posts/${post.link}`} style={{textDecoration: "none"}}>
                    {post.title}
                    </Link>
                    </div>
                }) :
                null}
            </HomeWrapper>
        )
    }
}

export default Home;