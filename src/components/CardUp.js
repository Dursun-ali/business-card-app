import React from 'react';
import './CardUp.css'
import Profile from '../assets/profile.png'

const CardUp = () => {
    return (
        <div className='d-flex user-card-headers' >
        <div className='d-flex'>
            <div className='card-profile-img-box'>
                <img src={Profile} alt="" />
            </div>
            <div className='card-name-duty-wrapper'>
                <div className='card-name'>Mustafa Lemi ELYAKAN</div>
                <div className='card-duty'>UI/UX Team Leader</div>
            </div>
        </div>
    </div>
    );
}

export default CardUp;