import React from 'react';
import './DetailsUp.css'
import Profile from '../assets/profile.png'

const DetailsUp = () => {
    return (
        <>
            <div className='d-flex user-details-headers' >
                <div className='d-flex'>
                    <div className='profile-img-box'>
                        <img src={Profile} alt="" />
                    </div>
                    <div className='details-name-duty-wrapper'>
                        <div className='details-name'>Mustafa Lemi ELYAKAN</div>
                        <div className='details-duty'>UI/UX Team Leader</div>
                    </div>
                </div>
                <div className='details-btn-wrapper'>
                    <button className='edit-btn'>
                        <div className='edit-btn-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="88" height="89" viewBox="0 0 88 89" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M87.0777 11.8221C83.4697 8.17344 79.8414 4.54438 76.193 0.936139C74.8896 -0.353045 73.2065 -0.296238 71.8791 1.01719C71.3688 1.52203 70.8601 2.02842 70.3522 2.53565L67.3087 5.58294L65.7833 7.10292C65.2895 7.59278 64.7862 8.07296 64.2871 8.54594L63.5434 9.25031L63.177 9.59901L78.3027 24.7235C78.2853 24.7301 78.3556 24.7242 78.3938 24.686C78.7588 24.3221 79.124 23.9584 79.4894 23.5949L81.6824 21.4143C83.5096 19.5969 85.3337 17.7766 87.138 15.937C88.3148 14.7369 88.279 13.0371 87.0777 11.8221ZM58.9071 14.0247L58.5626 14.3384C58.4992 14.3973 58.4346 14.4588 58.3716 14.5218L37.6565 35.2412C27.2999 45.6019 16.946 55.9653 6.5998 66.3362C6.1047 66.8325 5.70901 67.5117 5.48153 68.1787C4.89436 69.9017 4.31497 71.6274 3.73843 73.354L2.01248 78.535C1.43673 80.2618 0.858916 81.9879 0.274111 83.7116C-0.168105 85.0145 -0.145088 86.184 0.865691 87.1825C1.84782 88.1524 2.9967 88.1769 4.26238 87.7484C5.74 87.2483 7.21922 86.7529 8.69897 86.2591L13.1387 84.7793C15.3584 84.0387 17.5768 83.2945 19.7904 82.5363C20.5112 82.2893 21.2365 81.8451 21.7752 81.3074C37.6554 65.4592 53.5163 49.5915 69.3772 33.7238C70.7336 32.3667 72.0901 31.0097 73.4466 29.6526C73.5029 29.5963 73.5578 29.5385 73.6102 29.4815L73.7117 29.3692L73.9618 29.0848L58.9071 14.0247Z" fill="white" />
                            </svg>
                        </div>

                        <div className='edit-btn-write'>
                            Düzenle
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default DetailsUp;