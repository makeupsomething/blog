import React, { Component, createElement } from 'react';
import styled from 'styled-components';
import marksy from 'marksy';
import Highlight from 'react-highlight';

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

const Preview = styled.div`
    background: white;
    height: 200px;
    overflow: hidden;
    margin: 30px;
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

class PostPreview extends Component {    
    render() {
        const { title, headline } = this.props.post
        return (
            <Preview>
                <Title>{title}</Title>
                <SecondaryTitle>{headline}</SecondaryTitle>
            </Preview>
        )
    }
}

export default PostPreview;