import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from'./Header';
import About from './About';
import PostList from './PostList';
import Works from './Works';

const Container = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HeadLine = styled.div`
    height: ${props => props.height || "100vh"};
    width: 100vw;
	background: linear-gradient(93deg, 
	hsla(188, 90%, 50%,  0.73) 25%,
	hsla(301, 100%, 60%,  0.3) 75%),
	linear-gradient(0deg, 
	hsla(53, 93%, 50%,  0.75) 30%,
    hsla(291, 92%, 50%,  0.5) 70%);
    margin: 0;
`

function Home() {
    return (
        <Fragment>
            <HeadLine>
				<Header />
			</HeadLine>
            <Container id="work">
                <Works />
            </Container>
            <Container id="blog">
                <PostList />
            </Container>
            <HeadLine id="about" height="75vh">
                <About />
            </HeadLine>
        </Fragment>
    )
}

export default Home;