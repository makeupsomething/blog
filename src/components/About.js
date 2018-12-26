import React, {Fragment} from 'react'
import styled from 'styled-components'

const Parent = styled.div`
	height: 100vh;
	padding: 0 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

const Paragraph = styled.p`
	font-size: 1.5em;
    color: white;
    display: block;
    width: 75%;
    font-family: 'Lora', serif;
`;

export default function About() {
    return (
        <Parent>
            <Paragraph>Hi 👋</Paragraph>
            <Paragraph>
                Thank you for checking out my site!
                I am a web developer in Tokyo, Japan
            </Paragraph>
        </Parent>
    )
}