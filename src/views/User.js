import React, { useEffect, useState } from 'react';
import './User.css'
import SideBar from '../components/SideBar';
import Navbar from '../components/Navbar';
import Person from '../components/Person';
import UserData from './UserData';
import ReactPaginate from 'react-paginate';

const User = () => {
    const itemsPerPage = 10;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = UserData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(UserData.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % UserData.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="UserContainer container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-xl-2 sidebar-wrapper-container">
                        <SideBar />
                    </div>
                    <div className="col-lg-9 col-xl-10 navbar-wrapper-container">
                        <div className='navbar-down-wrapper'>
                        <Navbar />
                        <div className="row">
                            <div className="col-12 p-0 ">
                                <div className='user-wrapper' >
                                    <div className="user-box">
                                        <div className="user-header">
                                            <div className='search-box'>
                                                <div className="serach-icon-box">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M62.4 35.0061C62.2884 19.7183 50.043 7.63204 34.9994 7.60006C19.9274 7.56809 7.60966 19.8874 7.60001 34.9872C7.59035 50.0616 19.9025 62.4524 34.9805 62.3998C50.1479 62.347 62.2567 50.2592 62.4 35.0061ZM83.5329 88C82.6061 87.3124 81.5786 86.7263 80.7684 85.9214C72.9882 78.1945 65.2434 70.4318 57.4965 62.6713C57.2576 62.4318 57.1063 62.1051 56.9049 61.8053C47.9573 68.666 38.1736 71.1509 27.3826 68.8248C18.4094 66.8906 11.2542 61.9856 6.0977 54.4065C-3.67219 40.0466 -1.357 21.5437 10.5751 9.95814C23.9065 -2.98654 43.7482 -2.99278 57.0924 8.08962C71.0311 19.6657 74.4263 40.915 61.947 56.7246C62.1832 56.9717 62.4266 57.2362 62.6805 57.4904C70.4124 65.2253 78.1563 72.9483 85.8626 80.7089C86.6869 81.539 87.2929 82.586 88 83.5323V85.0789C87.5143 86.5404 86.5413 87.5149 85.0793 88H83.5329Z" fill="black" />
                                                    </svg>
                                                </div>
                                                <input type="text" placeholder='Personel Ara..' />
                                            </div>
                                            <div className='filter-icon'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="99" viewBox="0 0 88 99" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.038 0.0314626C57.181 0.0314626 70.324 0.0311671 83.4667 0.0317581C86.4689 0.0317581 87.8966 1.53921 87.9953 4.54082C88.0704 6.82461 87.2417 8.60424 85.6554 10.1936C81.2557 14.6018 76.8477 19.006 72.5703 23.5316C70.2436 25.993 67.745 28.2865 65.4896 30.8068C63.2773 33.2794 60.7754 35.4651 58.5723 37.9332C56.7315 39.9954 54.7258 41.8861 52.7946 43.854C52.4287 44.2267 52.2949 44.5961 52.2955 45.1135C52.312 62.5419 52.3138 79.9703 52.315 97.3986C52.3153 99.1895 52.3283 99.1339 50.6379 98.49C46.0535 96.7429 41.4581 95.022 36.8429 93.3571C36.0947 93.087 35.8692 92.7787 35.8704 92.0006C35.8949 76.8936 35.8831 61.7865 35.8973 46.6795C35.8985 45.2368 35.5019 44.1182 34.4102 43.0307C30.3932 39.0305 26.523 34.8835 22.5716 30.8168C18.901 27.0392 15.212 23.2786 11.5153 19.5264C8.64933 16.6173 5.77627 13.7123 2.94488 10.7686C1.31479 9.07353 -0.174343 7.25666 0.0165638 4.67794C0.225497 1.8569 1.49506 -0.0184805 4.72008 0.000137372C17.8256 0.0754953 30.9319 0.0314626 44.038 0.0314626Z" fill="black" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead className='table-headers'>
                                                    <tr className='table-wrapper'>
                                                        <th scope="col">
                                                            <div className='user-list-write'>
                                                                URL
                                                            </div>
                                                        </th>
                                                        <th scope="col">
                                                            <div className='user-list-write'>
                                                                Ad
                                                            </div>
                                                        </th>
                                                        <th scope="col">
                                                            <div className='user-list-write'>
                                                                Soyad
                                                            </div>
                                                        </th>
                                                        <th scope="col-3">
                                                            <div className='user-list-write'>
                                                                E-Posta
                                                            </div>
                                                        </th>
                                                        <th scope="col">
                                                            <div className='user-list-write'>
                                                                Görüntüleme
                                                            </div>
                                                        </th>
                                                        <th scope="col-1">
                                                            <div className='user-list-write'>
                                                                Durum
                                                            </div>
                                                        </th>
                                                        <th scope="col-1">

                                                        </th>
                                                    </tr>
                                                </thead>
                                                {
                                            currentItems.map((oItem, oIndex) => {
                                                return (
                                                    <Person oItem={oItem} oIndex={oIndex} />
                                                )
                                            })
                                        }
                                                </table>
                                        </div>

                                            <div className='paginate-container'>
                                            <p>{UserData.length} kayıt arasından {itemsPerPage} sonuç gösteriliyor.</p>
                                            <div className='paginate-section'>
                                                <ReactPaginate
                                                    className='paginate'
                                                    breakLabel="..."
                                                    nextLabel={
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11368 4.50411C9.05669 4.55847 9.02528 4.58972 8.99236 4.61963C8.08423 5.44564 7.17383 6.26963 6.2708 7.10025C6.17903 7.18463 6.10048 7.30174 6.06973 7.41569C6.0105 7.63512 6.13812 7.84338 6.3518 7.94358C6.56372 8.0429 6.81455 8.01056 6.99359 7.85071C7.29711 7.57983 7.59589 7.30456 7.89666 7.03114C8.85058 6.16385 9.80455 5.29666 10.7584 4.42931C11.0814 4.1356 11.0805 3.8758 10.7558 3.58056C9.51032 2.44805 8.26437 1.31599 7.01976 0.182734C6.85939 0.0367252 6.67774 -0.0368587 6.44987 0.0183449C6.06763 0.110935 5.91466 0.518935 6.15602 0.803877C6.19253 0.846962 6.23592 0.885508 6.27838 0.924116C7.18334 1.7475 8.08864 2.57058 8.99374 3.39384C9.02642 3.42359 9.05762 3.45465 9.11361 3.50813C9.03513 3.50813 8.98626 3.50813 8.93736 3.50813C6.17514 3.50813 3.41291 3.50782 0.650682 3.50938C0.553192 3.50942 0.450468 3.51327 0.359245 3.54042C0.108582 3.61506 -0.0321608 3.84364 0.00627041 4.08854C0.0412235 4.31145 0.256108 4.48818 0.510526 4.5018C0.56621 4.5048 0.622169 4.50402 0.677991 4.50402C3.42748 4.50411 6.17693 4.50411 8.92641 4.50411C8.97686 4.50411 9.02731 4.50411 9.11368 4.50411Z" fill="white" />
                                                        </svg>
                                                    }
                                                    onPageChange={handlePageClick}
                                                    pageRangeDisplayed={5}
                                                    pageCount={pageCount}
                                                    previousLabel={
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.88632 4.50411C1.94331 4.55847 1.97472 4.58972 2.00764 4.61963C2.91577 5.44564 3.82617 6.26963 4.7292 7.10025C4.82097 7.18463 4.89952 7.30174 4.93027 7.41569C4.9895 7.63512 4.86188 7.84338 4.6482 7.94358C4.43628 8.0429 4.18545 8.01056 4.00641 7.85071C3.70289 7.57983 3.40411 7.30456 3.10334 7.03114C2.14942 6.16385 1.19545 5.29666 0.24163 4.42931C-0.0814193 4.1356 -0.0805239 3.8758 0.244213 3.58056C1.48968 2.44805 2.73563 1.31599 3.98024 0.182734C4.14061 0.0367252 4.32226 -0.0368587 4.55013 0.0183449C4.93237 0.110935 5.08534 0.518935 4.84398 0.803877C4.80747 0.846962 4.76408 0.885508 4.72162 0.924116C3.81666 1.7475 2.91136 2.57058 2.00626 3.39384C1.97358 3.42359 1.94238 3.45465 1.88639 3.50813C1.96487 3.50813 2.01374 3.50813 2.06264 3.50813C4.82486 3.50813 7.58709 3.50782 10.3493 3.50938C10.4468 3.50942 10.5495 3.51327 10.6408 3.54042C10.8914 3.61506 11.0322 3.84364 10.9937 4.08854C10.9588 4.31145 10.7439 4.48818 10.4895 4.5018C10.4338 4.5048 10.3778 4.50402 10.322 4.50402C7.57252 4.50411 4.82307 4.50411 2.07359 4.50411C2.02314 4.50411 1.97269 4.50411 1.88632 4.50411Z" fill="white" />
                                                        </svg>
                                                    }
                                                    renderOnZeroPageCount={null}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}

export default User;