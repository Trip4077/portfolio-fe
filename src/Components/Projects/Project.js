import React from 'react';
import axios from 'axios';

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5050/projects/')
             .then(res => {
                 this.setState({
                     projects: res.data
                 });
             })
             .catch(err => {
                 console.log(err);
             });
    }

    render() {
        return(
            <div className='project-container'>
                
                {
                    this.state.projects.map(project => {
                        return(
                            <div className='project' key={Math.random()}>
                                <h3>{project.name}</h3>

                                <p>{project.synopsis}</p>

                                <img src={project.image}
                                     alt={project.name}
                                     />

                                <a href={project.liveAt}
                                   target='_blank'
                                   rel='noopener noreferrer'>
                                    
                                    <button>
                                        App
                                    </button>
                                </a>

                                <a href={project.ghLink}
                                   target='_blank'
                                   rel='noopener noreferrer'>

                                    <button>
                                        Code
                                    </button>
                                </a>

                                <p>{project.stack}</p>
                            </div>
                        );
                    })
                }

            </div>
        )
    }
}

export default Project;