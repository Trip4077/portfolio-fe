import React from 'react';

import ProjectTile from './ProjectTile';

const Projects = props => {
    return(
        <div className='project-container'> 
            {
                props.projects.map(project => <ProjectTile project={project} key={Math.random()} />)
            }
        </div>
    );
}

export default Projects;