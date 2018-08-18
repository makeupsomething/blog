import React, { Component, createElement } from 'react';
import styled from 'styled-components';
import marksy from 'marksy';
import Highlight from 'react-highlight';
import {Files as files} from '../markdown';

const Title = styled.h1`
  	font-size: 2.5em;
  	text-align: center;
    color: #4844a3;
    font-family: 'Bree Serif', serif;
`;

const Paragraph = styled.p`
	font-size: 1.5em;
  	color: #282F3D;
  	margin: auto;
    width: 75%;
    font-family: 'Lora', serif;
`;

const UnorderedList = styled.ul`
    list-style: square;
`

const Link = styled.a`
    color: #4844a3;
    text-decoration-line: underline;
`

const Quote = styled.blockquote`
    background-color: lightgray;
    border-left: solid 3px darkgray;
    width: 50%;
    margin: 30px auto;
    padding: 10px 0;
`

const compile = marksy({
	createElement,

  	elements: {
    h1 ({id, children}) {
      return <Title>{children}</Title>
    },
    p ({children}) {
        return <Paragraph>{children}</Paragraph>
    },
    ul ({children}) {
        return <UnorderedList>{children}</UnorderedList>
    },
    a ({children, href}) {
        return <Link href={href}>{children}</Link>
    },
    blockquote ({children}) {
        return <Quote>{children}</Quote>
    },
	code({language, code}) {
		return <Highlight style={{ width: '75%' }} className={language}>{code}</Highlight>
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