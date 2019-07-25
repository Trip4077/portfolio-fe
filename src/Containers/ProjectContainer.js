import React from 'react';
import axios from 'axios';
import Projects from '../Components/Projects/Projects';

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { projects: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5050/projects/')
             .then(projects => {
                 this.setState({ projects: projects.data });
             })
             .catch(err => {
                 console.log(err);
             });
    }

    render() {
        return (
            <div className='project-container' >
                <Projects projects={this.state.projects} />
            </div> 
        );
    }
}

export default ProjectContainer;