import React from 'react';
import axios from 'axios';

import Skills from '../Components/Skills/Skills';

class SkillContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { skills: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5050/skills/')
             .then(skills => {
                this.setState({ skills: skills.data });
             })
             .catch(err => {
                 console.log(err);
             });
    }

    render() {
        return(
            <div className='skill-container'>
                <Skills skills={this.state.skills} />
            </div>
        );
    }
}

export default SkillContainer;