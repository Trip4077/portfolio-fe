import React from 'react';

import About from '../Components/Bio/About';
import LinkContainer from '../Components/Bio/LinkContainer';

const HeaderContainer = () => {
    return(
        <div className='header-container'>
            <LinkContainer />
            <About />
        </div>        
    );
}

export default HeaderContainer;