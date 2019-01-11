import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'
import { Parent } from './styled/Section'

const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`

const HeaderTitle = styled.h1`
	color: white;
	font-size: 3.5em;
	hyphens: auto;
`

const SubTitle = styled.h2`
	color: white;
	font-size: 1.5em;
`;

function Header() {
    return (
		<Parent height="100vh">
			<HeaderWrapper>
				<HeaderTitle>{`makeupsomethinglater`}</HeaderTitle>
				<SubTitle>Just keeping my head above the water 🌊</SubTitle>
			</HeaderWrapper>
			<NavBar/>
		</Parent>
    )
}

export default Header