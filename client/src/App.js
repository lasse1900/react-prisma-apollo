import React from 'react';
import { Switch, Route } from 'react-router'
import './App.css';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import EditCourse from './components/EditCourse';
import Auth from './components/Auth';
import { AuthRoute, UnauthRoute } from 'react-router-auth'
import { AUTH_TOKEN } from './constants';

class App extends React.Component {
  render() {
    const isAuth = localStorage.getItem(AUTH_TOKEN) ? true : false
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Courses}></Route>
          <UnauthRoute exact path="/login" redirectTo='/' component={Auth} authenticated={isAuth} />
          <UnauthRoute exact path="/signup" redirectTo='/' component={Auth} authenticated={isAuth} />
          <AuthRoute exact path="/create" redirectTo='/login' component={CreateCourse} authenticated={isAuth} />
          <AuthRoute exact path="/course/:id/edit" redirectTo='/login' component={EditCourse} authenticated={isAuth} />
        </Switch>
      </div>
    );
  }
}

export default App;