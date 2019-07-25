import React from 'react';

import HeaderContainer from './Containers/HeaderContainer';
import SkillContainer from './Containers/SkillContainer';
import ProjectContainer from './Containers/ProjectContainer';
import FooterContainer from './Containers/FooterContainer';

import './css/index.css';

const App = () => {
  return(
    <div className="App">
      <HeaderContainer />
      <SkillContainer />
      <ProjectContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
