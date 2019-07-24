import React from 'react';
import './App.css';

import About from './Components/Bio/About';
import LinkContainer from './Components/Bio/LinkContainer';

import Skill from './Components/Skills/Skill';

import Project from './Components/Projects/Project';

function App() {
  return (
    <div className="App">
      <LinkContainer />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
