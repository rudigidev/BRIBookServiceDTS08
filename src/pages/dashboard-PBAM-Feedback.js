import React from 'react';
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';

class DashboardPbamPba extends React.Component {
    render() {
        return(
            <div className="container">

                <div className="side-menu">
                    <div className="user-level"><h2>PBAM</h2></div>
                    <div className="user-profile">
                        <img src={profile} width="100" height="100" alt="profile"/>
                        <h3>Rudi Giyarto</h3>
                    </div>
                    <div className="side-bri-logowhite">
                        <img src={briwhite} width="200" height="120" alt="briwhite"/>
                    </div>
                    <div className="side-user-menu">
                        <ul>
                            <li><i><Icon.PersonBadgeFill size={25} /></i>Kelola PBA</li>
                            <li><i><Icon.FileEarmarkTextFill size={25} /></i>Kelola Laporan</li>
                            <li className="menu-selected"><i><Icon.StarFill size={25} /></i>Feedback</li>
                        </ul>
                    </div>
                    <div className="side-logout">
                        <button className="btn-logout">Logout</button>
                    </div>
                </div>

                <div className="main-menu">

                    {/* Data Passing Disini */}
                    <div className="row2 feedback">
                        <div className="col4 feedback">
                        
                        <div className="feedbackpcu">
                            <div className="tabel-user-data">
                                                <h1>Feedback PCU</h1>
                                            <table className="table-data-user">
                                        <tr>
                                            <th>Nama PCU</th>
                                            <th>Feedback</th>
                                            <th>Nama PBA</th>
                                            <th>Komentar</th>
                                            <th>Tgl. Pertemuan</th>
                                            <th>Opsi</th>
                                        </tr>
                                        <tr>
                                            <td>Tuti Wardani</td>
                                            <td>5 Stars</td>
                                            <td>Revi Mariska</td>
                                            <td>Lorem isum...</td>
                                            <td>14-11-2020</td>
                                            <td>
                                            <button className="btn-edit">Lihat</button>
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Ilham Anjar</td>
                                            <td>5 Stars</td>
                                            <td>Revi Mariska</td>
                                            <td>Lorem isum...</td>
                                            <td>17-11-2020</td>
                                            <td>
                                            <button className="btn-edit">Lihat</button>
                                            </td>
                                            
                                        </tr>
                                        
                                        
                                    </table>
                                </div>
                        </div>

                        <div className="feedbackpba">
                        <div className="tabel-user-data">
                                                <h1>Feedback PBA</h1>
                                            <table className="table-data-user">
                                        <tr>
                                            <th>Nama PBA</th>
                                            <th>Feedback</th>
                                            <th>Nama PCU</th>
                                            <th>Komentar</th>
                                            <th>Tgl. Pertemuan</th>
                                            <th>Opsi</th>
                                        </tr>
                                        <tr>
                                            <td>Revi Mariska</td>
                                            <td>5 Stars</td>
                                            <td>Tuti Wardani</td>
                                            <td>Lorem isum...</td>
                                            <td>14-11-2020</td>
                                            <td>
                                            <button className="btn-edit">Lihat</button>
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Revi Mariska</td>
                                            <td>5 Stars</td>
                                            <td>Ilham Anjar</td>
                                            <td>Lorem isum...</td>
                                            <td>17-11-2020</td>
                                            <td>
                                            <button className="btn-edit">Lihat</button>
                                            </td>
                                            
                                        </tr>
                                        
                                        
                                    </table>
                                </div>
                        </div>

                        </div>
                    </div>
                    {/* Data Passing Disini */}

                </div>


            </div>
        );
    }
}

export default DashboardPbamPba;