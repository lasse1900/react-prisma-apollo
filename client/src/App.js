import React from 'react';
import { Switch, Route } from 'react-router'
import './App.css';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import EditCourse from './components/EditCourse';
import Auth from './components/Auth';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Courses}></Route>
        <Route exact path="/login" component={Auth}></Route>
        <Route exact path="/create" component={CreateCourse}></Route>
        <Route exact path="/course/:id/edit" component={EditCourse} />
      </Switch>
    </div>
  );
}

export default App;