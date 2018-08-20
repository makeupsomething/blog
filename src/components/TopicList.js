import React, { Component } from 'react';
import styled from 'styled-components';

import {Files as files} from '../markdown';

const List = styled.ul`
    list-style-type: square;
`

class TopicList extends Component {
    state = {
        topics: [],
    }

    componentDidMount = () => {
		this.setState({topics: files.files});
    }

    render() {
        return (
            <aside>
            <h3>Topic List</h3>
            <List>
            {this.state.topics ? 
                Object.keys(this.state.topics).map((topic, index) => {
                    return <li key={index}>
                    {topic}
                    </li>
                }) :
            null}
            </List>
            </aside>
        )
    }
}

export default TopicList;