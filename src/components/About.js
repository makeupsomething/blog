import React from 'react'
import styled from 'styled-components'
import { Wrapper, SectionTitle } from './styled/Section'

const Parent = styled.div`
	height: 75vh;
	padding: 0 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

const Paragraph = styled.p`
	font-size: 1.5em;
    color: white;
    font-family: 'Bree Serif', serif;
`;

export default function About() {
    return (
        <Parent>
            <SectionTitle inputColor="white">Hi 👋</SectionTitle>
            <Paragraph>
                Thank you for checking out my site!
                I am a web developer in Tokyo, Japan
            </Paragraph>
        </Parent>
    )
}