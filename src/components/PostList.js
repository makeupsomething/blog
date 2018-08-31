import React, { Component } from 'react';
import styled from 'styled-components';
import {Files as files} from '../markdown';
import PostPreview from './PostPreview';

const Container = styled.div`
    width: 75%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly;
    margin-bottom: 10px;
`

class PostList extends Component {
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
            <Container>
            {this.state.posts.map((post, index) => {
                return (
                        <PostPreview post={post} key={index}>{post.title}</PostPreview>
                )
            })}
            </Container>
        )
    }
}

export default PostList;