import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SectionText } from './styled/Section'

const Container = styled.div`
    width: 33%;
    @media (max-width: 700px) {
        width: 100%;
	}
`

const Title = styled.h1`
  	font-size: 2.7em;
    width: 90%;
    color: #4844a3;
    text-decoration: underline;
    font-family: 'Lora', serif;
`;

const Date = styled.time`
    display: block;
    color: #1d1e28;
    font-family: 'Lora', serif;
`

function PostPreview(props) {
    const { title, headline, link, date, tags } = props.post
    return (
        <Container>
            <Link to={`/posts/${encodeURIComponent(link)}`}>
                <Title>{title}</Title>
            </Link>
            <Date>{date}</Date>
            <SectionText>{headline}</SectionText>
        </Container>
    )
}

export default PostPreview;