import React, { Component } from 'react';
import styled from 'styled-components';
import {Files as files} from '../markdown';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
	top: 0px;
	color: #1d1e28;
	height: 25%;
    padding: 10px 0px;
    width: 50%;
    margin: auto;
`

class Home extends Component {
    state = {
        posts: [],
    }

	componentDidMount = () => {
		this.setState({posts: files.files});
    }
    
    render() {
        return (
            <HomeWrapper>
                <div>Home</div>
                {this.state.posts.map((post, index) => {
                    return <div><Link to={`/posts/${index}`} style={{textDecoration: "none"}}>{post.title}</Link></div>
                })}
            </HomeWrapper>
        )
    }
}

export default Home;