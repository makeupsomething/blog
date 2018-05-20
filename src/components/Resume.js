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
	font-size: 6em;
	word-wrap: break-word;
	padding: 10px 0px;
    font-family: 'Bree Serif', serif;
`

const SecondaryTitle = styled.h2`
	color: #7aacd4;
	font-size: 3em;
	word-wrap: break-word;
	padding: 10px 0px;
    font-family: 'Lora', serif;
`

class Resume extends Component {    
    render() {
        return (
            <Wrapper>
                <BannerTitle>My resume</BannerTitle>
                <SecondaryTitle>You won't find much here, yet</SecondaryTitle>
            </Wrapper>
        )
    }
}

export default Resume;