import './Person.css'
import { Link } from 'react-router-dom';

const Person = ({ oItem, oIndex }) => {
    return (
        <>
            <tbody>
                <tr style={(oItem.id % 2 == 0 || oItem.id == 0) ? { backgroundColor: "#FFFFFF" } : { backgroundColor: "#d8d8d848" }} className='table-body-wrapper'>
                    <td>
                        <div className='person-write'>
                            <a href="#">{oItem.url}</a>
                        </div>
                    </td>
                    <td>
                        <div className='person-write'>
                            {oItem.name}
                        </div>
                    </td>
                    <td>
                        <div className='person-write'>
                            {oItem.surname}
                        </div>
                    </td>
                    <td>
                        <div className='person-write'>
                            {oItem.email}
                        </div>
                    </td>
                    <td>
                        <div className='person-write'>
                            {oItem.viewCount}
                        </div>
                    </td>
                    <td>
                        <div className=' d-flex align-items-center'>
                            <div style={oItem.state == "Aktif" ? { backgroundColor: "#98A628" } : { backgroundColor: "#FFD93D" }} className='status-box'>
                                .
                            </div>
                            <div className='status-write person-write'>
                                {oItem.state}
                            </div>
                        </div>
                    </td>
                    <th scope="row">
                        <div className=' d-flex person-edit-delete-box'>
                            <Link to={`UserDetails/${oItem.id}`}>
                                <div key={oIndex} className='person-edit-icon person-write'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="89" viewBox="0 0 88 89" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M87.0777 11.8221C83.4697 8.17344 79.8414 4.54438 76.193 0.936139C74.8896 -0.353045 73.2065 -0.296238 71.8791 1.01719C71.3688 1.52203 70.8601 2.02842 70.3522 2.53565L67.3087 5.58294L65.7833 7.10292C65.2895 7.59278 64.7862 8.07296 64.2871 8.54594L63.5434 9.25031L63.177 9.59901L78.3027 24.7235C78.2853 24.7301 78.3556 24.7242 78.3938 24.686C78.7588 24.3221 79.124 23.9584 79.4894 23.5949L81.6824 21.4143C83.5096 19.5969 85.3337 17.7766 87.138 15.937C88.3148 14.7369 88.279 13.0371 87.0777 11.8221ZM58.9071 14.0247L58.5626 14.3384C58.4992 14.3973 58.4346 14.4588 58.3716 14.5218L37.6565 35.2412C27.2999 45.6019 16.946 55.9653 6.5998 66.3362C6.1047 66.8325 5.70901 67.5117 5.48153 68.1787C4.89436 69.9017 4.31497 71.6274 3.73843 73.354L2.01248 78.535C1.43673 80.2618 0.858916 81.9879 0.274111 83.7116C-0.168105 85.0145 -0.145088 86.184 0.865691 87.1825C1.84782 88.1524 2.9967 88.1769 4.26238 87.7484C5.74 87.2483 7.21922 86.7529 8.69897 86.2591L13.1387 84.7793C15.3584 84.0387 17.5768 83.2945 19.7904 82.5363C20.5112 82.2893 21.2365 81.8451 21.7752 81.3074C37.6554 65.4592 53.5163 49.5915 69.3772 33.7238C70.7336 32.3667 72.0901 31.0097 73.4466 29.6526C73.5029 29.5963 73.5578 29.5385 73.6102 29.4815L73.7117 29.3692L73.9618 29.0848L58.9071 14.0247Z" fill="black" />
                                    </svg>
                                </div>
                            </Link>
                            <div className='person-delete-icon person-write'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="112" viewBox="0 0 88 112" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.7166 37.7776C80.7166 38.1738 80.7407 38.5622 80.7129 38.9468L79.2987 58.4741L77.9254 77.6775L76.5032 97.313L76.162 101.706C76.051 103.171 75.9534 104.636 75.9011 106.102C75.8022 108.889 74.5628 110.675 71.9275 111.467H15.6167C12.8034 110.538 11.8649 108.496 11.6884 105.593L10.8388 92.3859L9.0233 65.9793C8.41119 56.9354 7.8243 47.8895 7.22995 38.8441L7.21978 38.5175L7.22709 37.7776H80.7166ZM31.4545 48.1175C30.2357 48.7942 29.7669 49.8927 29.77 51.2831L29.7802 62.1086L29.7778 72.9341C29.7778 80.151 29.7729 87.3679 29.7809 94.5851C29.7832 96.6707 31.0868 98.1078 32.924 98.0983C34.7916 98.0886 36.0494 96.6366 36.0499 94.4483L36.0514 51.3642C36.0514 51.1105 36.0614 50.8542 36.0319 50.6035C35.7688 48.3555 33.3811 47.0478 31.4545 48.1175ZM54.8162 47.7635C53.0719 47.8938 51.9115 49.2163 51.9087 51.1585L51.9024 78.6847C51.9038 84.0883 51.8903 89.4922 51.9161 94.8958C51.925 96.7053 53.2137 98.0232 54.9182 98.0892C56.5941 98.1544 57.9805 96.8877 58.1576 95.116L58.1798 94.6279L58.1779 51.5973C58.1779 51.3072 58.1917 51.0151 58.1648 50.7274C57.9957 48.9272 56.531 47.6352 54.8162 47.7635ZM80.5679 17.0234C84.0904 17.0245 86.8988 19.0834 87.69 22.324C87.9522 23.3975 87.951 24.5486 87.9774 25.6669L88 27.5099L87.9894 31.2544H0.0777289C0.0777289 28.5424 -0.126595 25.8846 0.127305 23.2724C0.478353 19.6623 3.28616 17.2372 6.87888 17.0309L7.14714 17.0214L7.41562 17.0196C31.7998 17.0193 56.184 17.0155 80.5679 17.0234ZM58.6435 0.000290922C61.1194 0.0052366 62.2405 1.14652 62.2457 3.66038L62.2468 10.6143H25.7264L25.727 3.78286C25.7301 1.10521 26.8039 0.00145461 29.4217 0L58.6435 0.000290922Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </th>
                </tr>
            </tbody>
        </>
    );
}

export default Person;