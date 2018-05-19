import React, { Component, createElement } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import marksy from 'marksy';
import logo from './logo.svg';
import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const compile = marksy({
  createElement,
  
  elements: {
    h1 ({id, children}) {
      return <Title>{children}</Title>
    },
  }
});

class App extends Component {
  state = {
    compiled_md: null,
  }

  componentDidMount = () => {
    const testFile = require("./markdown/test.md");
    fetch(testFile).then(response => {
      response.text().then(text => {
        const compiled = compile(text);
        this.setState({compiled_md: compile(text).tree})
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Router basename="/blog">
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <hr/>
            {this.state.compiled_md && this.state.compiled_md.length > 0 ? <div>{this.state.compiled_md}</div> : null}
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
