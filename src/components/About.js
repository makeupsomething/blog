import React from 'react'
import styled from 'styled-components'
import { SectionTitle, Parent, SectionText } from './styled/Section'

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
        <Parent height="75vh">
            <SectionTitle inputColor="white">Hi 
                <span role="img" aria-label="hand waving">👋</span>
            </SectionTitle>
            <SectionText inputColor="white">
                Thank you for checking out my site!
                I am a web developer in Tokyo, Japan
            </SectionText>
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