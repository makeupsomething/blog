import React, { Component, createElement } from 'react';
import styled from 'styled-components';
import marksy from 'marksy';
import Highlight from 'react-highlight';
import {Files as files} from '../markdown';

const Title = styled.h1`
  	font-size: 2.5em;
  	text-align: center;
	color: #4844a3;
`;

const Paragraph = styled.p`
	font-size: 1.5em;
  	color: #282F3D;
  	margin: auto;
  	width: 75%;
`;

const compile = marksy({
	createElement,

  	elements: {
    h1 ({id, children}) {
      return <Title>{children}</Title>
    },
    p ({children}) {
        return <Paragraph>{children}</Paragraph>
	},
	code({language, code}) {
		console.log(code)
		return <Highlight style={{ width: '75%' }} className="js">{code}</Highlight>
	},
  }
});

class Post extends Component {
    state = {
        compiled_md: null,
        posts: [],
    }

    componentWillMount = () => {
        this.setState({posts: files.files});
    }

    componentDidMount = () => {
        const { postId } = this.props.match.params;
        this.fetchPost();
    }

    componentDidUpdate = (prevProps) => {
        const { postId } = this.props.match.params;
        if(postId !== prevProps.match.params.postId) {
            this.fetchPost();
        }
    }

    fetchPost = () => {
        const { postId } = this.props.match.params;
        let testFile = '';
        if(!this.state.posts[parseInt(postId, 10)]) {
            testFile = require(`../markdown/notFound.md`);
        } else {
            const postLink = this.state.posts[parseInt(postId, 10)].link
            testFile = require(`../markdown/${postLink}`);
        }
        fetch(testFile).then(response => {
            response.text().then(text => {
                const compiled = compile(text);
                console.log(compile(text).tree[0].props)
                this.setState({compiled_md: compile(text).tree})
            })
        });
    }

    render() {
        return (
            this.state.compiled_md ? <div>{this.state.compiled_md}</div> : null
        )
    }
}

export default Post;