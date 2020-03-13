import React from 'react';
import { Switch, Route } from 'react-router'
import './App.css';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Courses}></Route>
        <Route exact path="/create" component={CreateCourse}></Route>
      </Switch>
    </div>
  );
}

export default App;
