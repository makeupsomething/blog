import React, { Component, createElement } from 'react';
import styled from 'styled-components';
import marksy from 'marksy';
import Highlight from 'react-highlight';
import {Files as files} from '../markdown';

const Title = styled.h1`
  	font-size: 2.7em;
  	text-align: center;
    color: #4844a3;
    font-family: 'Bree Serif', serif;
`;

const SecondaryTitle = styled.h2`
  	font-size: 1.5em;
  	text-align: center;
    color: #7aacd4;
    font-family: 'Lora', serif;
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
    font-size: 1.0em !important;
`

const compile = marksy({
	createElement,

  	elements: {
    h1 ({id, children}) {
      return <Title>{children}</Title>
    },
    h2 ({id, children}) {
        return <SecondaryTitle>{children}</SecondaryTitle>
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
        files.files = files.files.sort((x, y) => {
            return new Date(y.date) - new Date(x.date);
        });
        this.setState({posts: files.files});
    }

    componentDidMount = () => {
        this.fetchPost();
    }

    componentDidUpdate = (prevProps) => {
        const postLink = this.props.match ? this.props.match.params.postLink : this.state.posts[0].link;
        if(prevProps.match && postLink !== prevProps.match.params.postLink) {
            this.fetchPost();
        }
    }

    fetchPost = () => {
        const postLink = this.props.match ? this.props.match.params.postLink : this.state.posts[0].link;
        let testFile = '';
        try {
            testFile = require(`../markdown/${decodeURIComponent(postLink)}`)
        } catch(error) {
            testFile = require(`../markdown/notFound.md`);
        }

        fetch(testFile).then(response => {
            response.text().then(text => {
                this.setState({compiled_md: compile(text).tree})
            })
        });
    }

    render() {
        return (
            this.state.compiled_md ? 
            <div>
                {this.state.compiled_md}
            </div> : 
            null
        )
    }
}

export default Post;