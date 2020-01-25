import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home';
import Users from './pages/users';
import Profile from './pages/profile';
import Navigation from './components/navBar';

const Layout = props => {
  return (
    <>
      <Navigation/>
      <div className="container mt-5">
        {props.children}
      </div>
    </>
  );
}
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/profile">
            <Layout>
              <Profile/>
            </Layout>
          </Route>
          <Route path="/users">
            <Layout>
              <Users/>
            </Layout>
          </Route>
          <Route path="/" exact>
            <Layout>
              <Home/>
            </Layout>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
