import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  	font-size: 2.7em;
  	text-align: center;
    color: #4844a3;
    font-family: 'Bree Serif', serif;
    text-decoration: underline;
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
        const { title, headline, link } = this.props.post
        return (
            <Preview>
                <div>{link}</div>
                <Link to={`/posts/${encodeURIComponent(link)}`}><Title>{title}</Title></Link>
                <SecondaryTitle>{headline}</SecondaryTitle>
            </Preview>
        )
    }
}

export default PostPreview;