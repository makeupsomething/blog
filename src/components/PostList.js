import React, { Component } from 'react';
import styled from 'styled-components';
import {Files as files} from '../markdown';
import PostPreview from './PostPreview';
import { Link } from 'react-router-dom';

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
            <div>
            {this.state.posts.map(post => {
                return <PostPreview post={post}>{post.title}</PostPreview>
            })}
            </div>
        )
    }
}

export default PostList;