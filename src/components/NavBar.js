import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Bar = styled.span`
    display: flex;
    justify-content: space-between;
`

const NavContents = styled.div`
`

const NavButton = styled.div`
    color: white;
    font-family: 'Lora', serif;
    padding: 12px 30px;
    margin: 0;
    border: solid 1px white;

    :hover {
        color: black;
        background-color: white;
        transition: all .5s
    }
`

function NavBar() {
    return (
        <Bar>
            <NavContents>
                <Link to="#work" style={{textDecoration: "none", color: "#7aacd4", margin: "auto"}}>
                    <NavButton>Work</NavButton>
                </Link>
            </NavContents>
            <NavContents>
                <Link to="#blog" style={{textDecoration: "none", color: "#7aacd4", margin: "auto"}}>
                    <NavButton>Blog</NavButton>
                </Link>
            </NavContents>
            <NavContents>
                <Link to="#about" style={{textDecoration: "none", color: "#7aacd4", margin: "auto"}}>
                    <NavButton>About</NavButton>
                </Link>
            </NavContents>
        </Bar>
    )
}

export default NavBar