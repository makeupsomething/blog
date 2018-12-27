import React, { Component, createElement, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import marksy from 'marksy';
import Highlight from 'react-highlight';


const Wrapper = styled.div`
	color: #1d1e28;
    width: 50vw;
    margin: auto;
    @media (max-width: 700px) {
        width: 80vw;
	}
`

const Title = styled.h1`
  	font-size: 2.7em;
    color: #4844a3;
    font-family: 'Lora', serif;
`;

const SecondaryTitle = styled.h2`
  	font-size: 1.7em;
    color: #7aacd4;
    font-family: 'Lora', serif;
`;

const Paragraph = styled.p`
    font-size: 1.2em;
    font-family: 'Bree Serif', serif;
`;

const UnorderedList = styled.ul`
    list-style: square;
`

const HyperLink = styled.a`
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


const HeadLine = styled.div`
    height: ${props => props.height || "100vh"};
    width: 100vw;
	background: linear-gradient(93deg, 
	hsla(188, 90%, 50%,  0.73) 25%,
	hsla(301, 100%, 60%,  0.3) 75%),
	linear-gradient(0deg, 
	hsla(53, 93%, 50%,  0.75) 30%,
    hsla(291, 92%, 50%,  0.5) 70%);
    margin: 0;
    display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: flex-start;
    padding-left: 5%;
`

const HeaderTitle = styled.span`
	color: white;
    font-size: 3.5em;
    text-decoration: none;
    hyphens: auto;
    font-family: 'Bree Serif', serif;
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
        return <HyperLink href={href}>{children}</HyperLink>
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
        error: false,
    }

    componentDidMount = () => {
        this.fetchPost();
    }

    fetchPost = () => {
        const postLink = this.props.match.params.postLink;
        let post = '';
        try {
            post = require(`../markdown/${decodeURIComponent(postLink)}`)
        } catch(error) {
            this.setState({error: true})
        }

        fetch(post).then(response => {
            response.text().then(text => {
                this.setState({compiled_md: compile(text).tree})
            })
        });
    }

    render() {
        return (
            <Fragment>
            <HeadLine height="30vh">
            <Link to={`/`} style={{textDecoration: "none", color: "#7aacd4"}}>
                <HeaderTitle>
                    makeupsomethinglater
                </HeaderTitle>
            </Link>
            </HeadLine>
            {this.state.compiled_md ? 
            <Wrapper>
                {this.state.compiled_md}
            </Wrapper> : 
            null}
            </Fragment>
        )
    }
}

export default Post;