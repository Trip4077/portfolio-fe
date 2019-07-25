import React from 'react';

const ProjectTile = props => {
    return(        
        <div className='project' key={Math.random()}>
            <h3>{props.project.name}</h3>

            <p>{props.project.synopsis}</p>

            <img src={props.project.image}
                    alt={props.project.name}
                    />

            <a href={props.project.liveAt}
                target='_blank'
                rel='noopener noreferrer'>
                
                <button>
                    App
                </button>
            </a>

            <a href={props.project.ghLink}
                target='_blank'
                rel='noopener noreferrer'>

                <button>
                    Code
                </button>
            </a>

            <p>{props.project.stack}</p>
        </div>
    );
}

export default ProjectTile;