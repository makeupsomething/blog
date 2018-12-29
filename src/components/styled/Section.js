import styled from 'styled-components';

export const Wrapper = styled.section`
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

export const Parent = styled.div`
	height: ${props => props.height || "fit-content"};
	padding: 0 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: flex-start;
    
    @media (max-width: 700px) {
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
`

export const SectionText = styled.p`
	font-size: 1.5em;
  	color: ${props => props.inputColor || "#282F3D"};
  	margin-top: 10px;
    font-family: 'Bree Serif', serif;
`;