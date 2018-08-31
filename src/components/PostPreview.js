import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  	font-size: 2.7em;
    color: #4844a3;
    font-family: 'Bree Serif', serif;
    text-decoration: underline;
`;

const SecondaryTitle = styled.h2`
  	font-size: 1.5em;
    color: #7aacd4;
    font-family: 'Lora', serif;
`;

const Date = styled.time`
    display: block;
    font-family: 'Lora', serif;
`

const Pill = styled.span`
    margin-right: 5px;
    background: #7aacd4;
    text-decoration: underline;
`

class PostPreview extends Component {    
    render() {
        const { title, headline, link, date, tags } = this.props.post
        return (
            <div>
                <Link to={`/posts/${encodeURIComponent(link)}`}><Title>{title}</Title></Link>
                {tags.map((tag) => {
                    return <Pill key={tag}>{tag}</Pill>
                })}
                <Date>{date}</Date>
                <SecondaryTitle>{headline}</SecondaryTitle>
            </div>
        )
    }
}

export default PostPreview;