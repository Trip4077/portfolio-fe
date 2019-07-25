import React from 'react';

const SkillTile = props => {
    return(
        <div className='skill'>
            <p key={Math.random()} className={props.skill.category}>{props.skill.name}</p>
        </div>
    );
}
export default SkillTile;