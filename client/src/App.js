import React from 'react';
import './App.css';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';

function App() {
  return (
    <div className="App">
      <CreateCourse />
      <Courses />
    </div>
  );
}

export default App;
