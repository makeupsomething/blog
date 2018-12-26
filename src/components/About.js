import React from 'react'
import styled from 'styled-components'

const Parent = styled.div`
	height: 75vh;
	padding: 0 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

const HeaderTitle = styled.h2`
	color: white;
    font-size: 2.5em;
    font-family: 'Bree Serif', serif;
`

const Paragraph = styled.p`
	font-size: 1.5em;
    color: white;
    display: block;
    width: 75%;
    font-family: 'Bree Serif', serif;
`;

export default function About() {
    return (
        <Parent>
            <HeaderTitle>Hi 👋</HeaderTitle>
            <Paragraph>
                Thank you for checking out my site!
                I am a web developer in Tokyo, Japan
            </Paragraph>
        </Parent>
    )
}