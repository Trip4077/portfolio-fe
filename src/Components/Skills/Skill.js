import React from 'react';
import axios from 'axios';

class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5050/skills/')
             .then(res => {
                 this.setState({
                     skills: res.data
                 });
             })
             .catch(err => {
                console.log(err);
            });
    }

    render() {
        return(
            <div className='skill-container'>
                {this.state.skills.map(skill => {
                    return <p key={Math.random()} className={skill.category}>{skill.name}</p>
                })}
            </div>
        )
    }
}

export default Skill;