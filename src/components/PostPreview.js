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
      color: #1d1e28;
    font-family: 'Lora', serif;
`;

const Date = styled.time`
    display: block;
    color: #1d1e28;
    font-family: 'Lora', serif;
`

const TagList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: inline-block;
`

const Pill = styled.li`
    margin-right: 5px;
    margin-bottom: 5px;
    background: #7aacd4;
    text-decoration: underline;
    float: left;
`

class PostPreview extends Component {    
    render() {
        const { title, headline, link, date, tags } = this.props.post
        return (
            <div>
                <Link to={`/posts/${encodeURIComponent(link)}`}><Title>{title}</Title></Link>
                <Date>{date}</Date>
                <SecondaryTitle>{headline}</SecondaryTitle>
                <TagList>
                {tags.map((tag) => {
                    return <Pill key={tag}>{tag}</Pill>
                })}
                </TagList>
            </div>
        )
    }
}

export default PostPreview;