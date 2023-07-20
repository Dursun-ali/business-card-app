import React from 'react';
import './CardDown.css'

const CardDown = ({ oItem, oIndex }) => {
    return (
        <>
            <div key={oIndex} className={`card-down-wrapper`}>
                <div className='down-card-icon'>
                    {oItem.icon}
                </div>
                <div className='down-card-box'>
                    <div className='down-first-card-write'>{oItem.title}</div>
                    <div className='down-second-card-write'>{oItem.write}</div>
                </div>
            </div>
        </>
    );
}

export default CardDown;