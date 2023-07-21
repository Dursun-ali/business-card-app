import React from 'react';
import './Page404.css'
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <>
            <div className='main-error-container'>
                <div className='error-container'>
                    <div className="row">
                        <div className="col-12">
                            <div className='error-write-container'>
                                <p className='error-first-write'>404 HATASI</p>
                                <p className='error-second-write'>Aradığınız İçerikte Sayfa Bulunamadı</p>
                                <div className='error-btn-box'>
                                    <Link to="/">
                                        <button className='error-btn'>Ana sayfaya git</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404;