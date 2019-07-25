import React from 'react';

const Link = props => {
    return(
        <div className='link-box' key={Math.random()}>

            <a href={props.social.link}
                target='_blank'
                rel='noopener noreferrer'
                >

                <img src={props.social.icon}
                    alt={`${props.social.name} Logo`}
                    />
            
            </a>

            <a href={props.social.link} 
                target='_blank'
                rel="noopener noreferrer"
                >

                <button>
                    {props.social.name}
                </button>                            
            </a>

        </div>
    );
}

export default Link;