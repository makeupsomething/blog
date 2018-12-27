import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: flex-start;
	color: #1d1e28;
    height: fit-content;
    padding: 0 5%;
    background-color:  ${props => props.backgroundColor || "#F4F4F4"};

    @media (max-width: 700px) {
		flex-direction: column;
		justify-content: space-evenly;
        align-items: center;
	}
`

export const SectionTitle = styled.h2`
	color:  ${props => props.inputColor || "#4844a3"};
    font-size: 2.5em;
	word-wrap: break-word;
    font-family: 'Bree Serif', serif;
`