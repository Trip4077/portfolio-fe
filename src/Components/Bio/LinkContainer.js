import React from 'react';
import axios from 'axios';

import Link from './Link';

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

    render() { return this.state.socialInfo.map(social => <Link social={social} key={Math.random()} />) }
}

export default LinkContainer;