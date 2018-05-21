import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	color: #1d1e28;
	height: 25%;
    width: 75%;
    margin: auto;
    align-content: center;
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

class Works extends Component {    
    render() {
        return (
            <Wrapper>
                <BannerTitle>Some stuff that I am working on</BannerTitle>
                <SecondaryTitle>Because nothing is ever finished right?</SecondaryTitle>
                <ul>
                    <li>
                        <a href="https://github.com/makeupsomething/blog">This blog</a>
                        <p>A platform for my blog.
                            I had an itch to write a blog, but I also wanted to build the platform for my blog. So I made this.
                            Posts are written in markdown then imported and converted to React components. Styling is done with Styled Components.
                            Other pages such as the home page, reusme and this page are just regular react components.
                            Forever in development.
                        </p>
                    </li>
                    <li>
                        <a href="https://github.com/makeupsomething/gradientr">Gradientr</a>
                        <p>Gradientr is a tool for making the perfect gradient to use in your web app.
                            Written in React this was something that started as a simple idea and just kept growing.
                            Currently still in development.
                        </p>
                    </li>
                </ul>
            </Wrapper>
        )
    }
}

export default Works;