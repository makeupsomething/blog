import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	color: #1d1e28;
	height: 25%;
    margin: auto;
    align-content: center;
    background-color: #F4F4F4;
`

const BannerTitle = styled.h1`
	color: #4844a3;
	font-size: 2.5em;
	word-wrap: break-word;
	padding: 10px 0px;
    font-family: 'Bree Serif', serif;
`

const SecondaryTitle = styled.h2`
	color: #7aacd4;
	font-size: 1.5em;
	word-wrap: break-word;
	padding: 10px 0px;
    font-family: 'Lora', serif;
`

const Paragraph = styled.p`
	font-size: 1.5em;
  	color: #282F3D;
  	margin: auto;
    width: 75%;
    font-family: 'Lora', serif;
`;

const Span = styled.span`
    font-family: 'Lora', serif;
`;

const UnorderedList = styled.ul`
    list-style: square;
`

const Link = styled.a`
    color: #4844a3;
    text-decoration-line: underline;
`

class Works extends Component {    
    render() {
        return (
            <Wrapper>
                <BannerTitle>Some stuff that I am working on</BannerTitle>
                <UnorderedList>
                    <li>
                        <Span><Link href="https://github.com/makeupsomething/blog">This blog</Link></Span>
                        <Paragraph>
                            A platform for my blog.
                            I had an itch to write a blog, but I also wanted to build the platform for my blog. So I made this.
                            Posts are written in markdown then imported and converted to React components. Styling is done with Styled Components.
                            Other pages such as the home page, reusme and this page are just regular react components.
                            Forever in development.
                        </Paragraph>
                    </li>
                    <li>
                        <Span><Link href="https://github.com/makeupsomething/gradientr">Gradientr</Link></Span>
                        <Paragraph>
                            Gradientr is a tool for making the perfect gradient to use in your web app.
                            Written in React this was something that started as a simple idea and just kept growing.
                            Currently still in development.
                        </Paragraph>
                    </li>
                    <li>
                        <Span><Link href="#">Sudoku</Link></Span>
                        <Paragraph>
                            Just a simple sudoku game generater, generate a game and check your solution.
                            Solves sudokus using simple backtracking
                            Currently still in development.
                        </Paragraph>
                    </li>
                </UnorderedList>
            </Wrapper>
        )
    }
}

export default Works;