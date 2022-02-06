import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from "./pages/LandingPage/index";
import Login from "./pages/LoginPage/index";
import Explore from "./pages/ExplorePage/index";
import Profile from "./pages/ProfilePage/index";
import CustomNavbar from "./components/CustomNavbar/index";
import SignUp from "./pages/SignupPage/index";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/explore' component={Explore} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
