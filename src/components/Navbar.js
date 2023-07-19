import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className='navbar-write'>
                PERSONEL LİSTESİ
            </div>
            <div className='navbar-admin-wrapper'>
                <div className='img-profile'>
                    <img className='rounded-circle' src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                </div>
                <div className='admin-write'>
                    Admin
                </div>
            </div>
        </div>
    );
}

export default Navbar;