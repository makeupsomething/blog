import React, { Component } from 'react';
import styled from 'styled-components';
import {Files as files} from '../markdown';
import PostList from './PostList';

const HomeWrapper = styled.div`
	color: #1d1e28;
	height: 25%;
    width: 75%;
    margin: auto;
    text-align: center;
`

const BannerTitle = styled.h1`
	color: #4844a3;
	font-size: 3.5em;
	word-wrap: break-word;
	padding: 10px 0px;
    margin: auto;
    font-family: 'Bree Serif', serif;
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
            <div>
            <HomeWrapper>
                <BannerTitle>Hi, Welcome to my blog</BannerTitle>
            </HomeWrapper>
            <PostList />
            </div>
        )
    }
}

export default Home;