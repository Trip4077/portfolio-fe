import React from 'react';
import axios from 'axios';

class LinkContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            socialInfo: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5050/media/')
             .then(res => {
                 this.setState({
                     socialInfo: res.data
                 });
             })
             .catch(err => {
                 console.log(err);
             });
    }

    render() {
        return(
            <div className='link-container'>
                
                {this.state.socialInfo.map(social => {
                    return(

                        <div className='link-box' key={Math.random()}>

                            <a href={social.link}
                               target='_blank'
                               rel='noopener noreferrer'
                               >

                                <img src={social.icon}
                                 alt={`${social.name} Logo`}
                                 />
                            
                            </a>

                            <a href={social.link} 
                               target='_blank'
                               rel="noopener noreferrer"
                               >

                                <button>
                                    {social.name}
                                </button>                            
                            </a>

                        </div>

                    );
                })}

            </div>
        );
    }
}

export default LinkContainer;