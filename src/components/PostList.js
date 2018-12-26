import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import {Files as files} from '../markdown';
import PostPreview from './PostPreview';

const Wrapper = styled.div`
	color: #1d1e28;
    margin: auto;
    align-content: center;
    background-color: white;
`

const BannerTitle = styled.h1`
	color: #4844a3;
    font-size: 2.5em;
	word-wrap: break-word;
    font-family: 'Bree Serif', serif;
`

const Container = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly;
`

class PostList extends Component {
    state = {
        posts: [],
    }

	componentDidMount = () => {
        files.files = files.files.sort((x, y) => {
            return new Date(y.date) - new Date(x.date);
        });
		this.setState({posts: files.files.slice(0, 3)});
    }
    
    render() {
        return (
            <Wrapper>
            <BannerTitle>Some stuff that I have written</BannerTitle>
            <Container>
            {this.state.posts.map((post, index) => {
                return (
                    <PostPreview post={post} key={index}>{post.title}</PostPreview>
                )
            })}
            </Container>
            </Wrapper>
        )
    }
}

export default PostList;