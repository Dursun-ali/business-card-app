import React from 'react';
import './DetailsDown.css'

const DetailsDown = ({oItem,oIndex,cls}) => {
    return (
        <>
           
                <div className= {`details-down-wrapper ${cls}`}>
                    <div className='down-details-icon'>
                        {oItem.icon}
                    </div>
                    <div className='down-details-box'>
                        <div className='down-first-write'>{oItem.title}</div>
                        <div className='down-second-write'>{oItem.write}</div>
                    </div>
                </div>
           
        </>
    );
}

export default DetailsDown;