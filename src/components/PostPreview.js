import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 33%;
`

const Title = styled.h1`
  	font-size: 2.7em;
    width: 90%;
    color: #4844a3;
    text-decoration: underline;
    font-family: 'Lora', serif;
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
    text-decoration: underline;
    float: left;
`

function PostPreview(props) {
    const { title, headline, link, date, tags } = props.post
    return (
        <Container>
            <Link to={`/posts/${encodeURIComponent(link)}`}>
                <Title>{title}</Title>
            </Link>
            <Date>{date}</Date>
            <SecondaryTitle>{headline}</SecondaryTitle>
        </Container>
    )
}

export default PostPreview;