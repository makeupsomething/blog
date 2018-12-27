import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from './styled/Section'

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

const SocialSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Link = styled.a`
    color: white;
    cursor: pointer;
`

export default function About() {
    return (
        <Parent>
            <SectionTitle inputColor="white">Hi 👋</SectionTitle>
            <Paragraph>
                Thank you for checking out my site!
                I am a web developer in Tokyo, Japan
            </Paragraph>
            <SocialSection>
                <Link href="https://github.com/makeupsomething">
                    <ion-icon name="logo-github" size="large"></ion-icon>
                </Link>
                <Link href="https://www.linkedin.com/in/daryl-cole/">
                    <ion-icon name="logo-linkedin" size="large"></ion-icon>
                </Link>
                <Link href="https://twitter.com/mkupsmth">
                    <ion-icon name="logo-twitter" size="large"></ion-icon>
                </Link>
            </SocialSection>
        </Parent>
    )
}