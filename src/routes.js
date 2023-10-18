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
			<Redirect from="/old-match" to="/will-match" />
			<Route path="/will-match" component={WillMatch} />
			<Route component={NoMatch} />
		</Switch>
	</Router>
);

// function Home() {
//   return (
//     <p>
//       A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
//       that matches. A <code>&lt;Route></code> with no <code>path</code> always
//       matches.
//     </p>
//   );
// }

function WillMatch() {
	return <h3>Matched!</h3>;
}

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
