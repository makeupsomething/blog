import React from 'react';
import styled from 'styled-components';
import { Wrapper, SectionTitle } from './styled/Section'

const Paragraph = styled.p`
	font-size: 1.5em;
  	color: #282F3D;
  	margin-top: 10px;
    font-family: 'Bree Serif', serif;
`;

const UnorderedList = styled.ul`
    list-style: none;
    padding: 0;
`

const ListItem = styled.li`
    margin-bottom: 30px;
`

const Link = styled.a`
    color: #4844a3;
    font-size: 1.2em;
    font-family: 'Lora', serif;
    text-decoration-line: underline;
`

function Works() {
    return (
        <Wrapper>
            <SectionTitle>Some stuff that I am working on</SectionTitle>
            <UnorderedList>
                <ListItem>
                    <Link href="https://github.com/makeupsomething/blog">This blog</Link>
                    <Paragraph>
                        A platform for my blog.
                        I had an itch to write a blog, but I also wanted to build the platform for my blog. So I made this.
                        Posts are written in markdown then imported and converted to React components. Styling is done with Styled Components.
                        Other pages such as the home page, reusme and this page are just regular react components.
                        Forever in development.
                    </Paragraph>
                </ListItem>
                <ListItem>
                    <Link href="https://github.com/makeupsomething/gradientr">Gradientr</Link>
                    <Paragraph>
                        Gradientr is a tool for making the perfect gradient to use in your web app.
                        Written in React this was something that started as a simple idea and just kept growing.
                        Currently still in development.
                    </Paragraph>
                </ListItem>
            </UnorderedList>
        </Wrapper>
    )
}

export default Works;