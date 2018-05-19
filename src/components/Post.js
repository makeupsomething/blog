import React, { Component, createElement } from 'react';
import styled from 'styled-components';
import marksy from 'marksy';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Paragraph = styled.p`
  font-size: 1em;
  color: limegreen;
  margin: auto;
`;

const compile = marksy({
  createElement,

  elements: {
    h1 ({id, children}) {
      return <Title>{children}</Title>
    },
    p ({children}) {
        return <Paragraph>{children}</Paragraph>
    },
  }
});

class Post extends Component {
    state = {
        compiled_md: null,
    }

    componentDidMount = () => {
        const { postId } = this.props.match.params;
        this.fetchPost();
    }

    componentDidUpdate = (prevProps) => {
        const { postId } = this.props.match.params;
        if(postId !== prevProps.match.params.postId) {
            this.fetchPost();
        }
    }

    fetchPost = () => {
        const { postId } = this.props.match.params;
        const testFile = postId === "1" ? require("../markdown/test.md") : require("../markdown/test2.md");
        fetch(testFile).then(response => {
            response.text().then(text => {
                const compiled = compile(text);
                this.setState({compiled_md: compile(text).tree})
            })
        });
    }

    render() {
        return (
            this.state.compiled_md ? <div>{this.state.compiled_md}</div> : null
        )
    }
}

export default Post;