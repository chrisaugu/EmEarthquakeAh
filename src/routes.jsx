import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Link,
	Route,
	Switch
} from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/login" component={Login}/>
			<Route path="*" component={NotFound}/>
			<Route component={NoMatch} />
		</Switch>
	</Router>
);

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default Routes;
