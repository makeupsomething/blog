import React, {Fragment} from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'

const Parent = styled.div`
	height: 100vh;
	padding: 0 5%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 700px) {
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
`

const HeaderWrapper = styled.span`
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
		<Fragment>
			<Parent>
			<HeaderWrapper>
				<HeaderTitle>{`makeupsomethinglater`}</HeaderTitle>
				<SubTitle>Just keeping my head above the water</SubTitle>
			</HeaderWrapper>
			<NavBar/>
			</Parent>
		</Fragment>
    )
}

export default Header