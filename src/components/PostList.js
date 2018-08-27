import React, { Component } from 'react';
import styled from 'styled-components';
import {Files as files} from '../markdown';
import PostPreview from './PostPreview';
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
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
            {this.state.posts.map(post => {
                return (
                    <PostPreview post={post}>{post.title}</PostPreview>
                )
            })}
            </Container>
        )
    }
}

export default PostList;