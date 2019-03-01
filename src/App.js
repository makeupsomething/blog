import React, { Fragment } from 'react';
import { 
	BrowserRouter as Router, 
	Route, 
	Switch,
} from 'react-router-dom';
import Post from './components/Post';
import NotFound from './components/NotFound';
import Home from './components/Home';

export default function App() {
	return (
		<Router basename="/" onUpdate={() => window.scrollTo(0, 0)}>
			<Fragment>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path={`/posts/:postLink`} component={Post}/>
					<Route component={NotFound} />
				</Switch>
			</Fragment>
		</Router>
	);
}