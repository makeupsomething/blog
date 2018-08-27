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

const Preview = styled.div`
    display: inline;
`

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