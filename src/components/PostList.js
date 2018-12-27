import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import {Files as files} from '../markdown';
import PostPreview from './PostPreview';
import { Wrapper, SectionTitle } from './styled/Section'


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 700px) {
		flex-direction: column;
		justify-content: space-evenly;
        align-items: center;
	}
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
            <Wrapper backgroundColor="white">
                <SectionTitle>Some stuff that I have written</SectionTitle>
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