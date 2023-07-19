import React from 'react';
import logoImg from '../assets/logo.png'
import './SideBar.css'
const SideBar = () => {
    return (
        <>
                <div className='sideBarContainer'>
                   <div className='logo-img-container'>
                    <img src={logoImg} alt="" />
                   </div>
                    <div>
                        <ul className='write-ul'>
                            <li style={{backgroundColor:"#16497C",color:"#FFFFFF"}}><span className='me-4 ms-3'></span> Kartvizit Yönetimi</li>
                            <li><span className='me-4 ms-3'></span>Admin Yönetimi</li>
                            <li><span className='me-4 ms-3'></span>Ayarlar</li>
                        </ul>
                    </div>
                </div>
        </>
      
    );
}

export default SideBar;