import React, { Component } from 'react';
import styled from 'styled-components';

import {Files as files} from '../markdown';


class Topics extends Component {
    state = {
        topics: [],
    }

    componentDidMount = () => {
		this.setState({topics: files.files});
    }

    render() {
        return (
            <h3>Topic</h3>
        )
    }
}

export default Topics;