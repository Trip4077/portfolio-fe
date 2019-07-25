import React from 'react';

import SkillTile from './SkillTile';

const Skills = props => {
    return(
        <div className='skill-container'>
            {
                props.skills.map(skill => <SkillTile skill={skill} key={Math.random()} />)
            }
        </div>
    );
}

export default Skills;