import React, { Fragment } from 'react';
import { 
	BrowserRouter as Router, 
	Route, 
	Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import Post from './components/Post';
import NotFound from './components/NotFound';
import Home from './components/Home';

const Main = styled.main`
	height: auto;
	background-color: '#F4F4F4';
`

function App() {
	return (
		<Router basename="/blog" onUpdate={() => window.scrollTo(0, 0)}>
			<Fragment>
				<Main>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path={`/posts/:postLink`} component={Post}/>
						<Route component={NotFound} />
					</Switch>
				</Main>
			</Fragment>
		</Router>
	);
}

export default App;
