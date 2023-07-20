import React from 'react';
import './UserCard.css'
import logoImg from '../assets/logo.png'
import CardUp from '../components/CardUp';
import DetailsDownData from './DetailsDownData';
import CardDown from '../components/CardDown';

const UserCard = () => {
    return (
        <>
            <div className='container-fluid userCardContainer'>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className='firstUserCardWrapper'>
                            <img src={logoImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className='SecondUserCardWrapper'>
                            <CardUp />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className='ThirdUserCardWrapper'>
                            {DetailsDownData.map((oItem, oIndex) => {
                                return (
                                    <CardDown cls={"card-item"} oItem={oItem} oIndex={oIndex} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCard;