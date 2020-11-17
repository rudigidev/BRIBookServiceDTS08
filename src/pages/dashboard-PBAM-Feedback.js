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

                        <h1>Feedback PCU</h1>
                        <div className="feedback-lihat">
                            <div className="feedback-row">
                                <div className="feedback-foto">
                                    <img src={profile} alt="foto" width="200" height="200"/>
                                </div>
                                <div className="feedback-info">
                                <h3 className="feedfor">Ulasan Dari</h3>
                                    <h2>PCU : Tuti Ramadani</h2>
                                    <h3 className="feedfor">Untuk</h3>
                                    <h2>PBA : Revi Mariska</h2>
                                </div>
                                <div className="feedback-stars">
                                    <Icon.StarFill/><Icon.StarFill/><Icon.StarFill/><Icon.StarFill/><Icon.StarFill/>
                                </div>
                            </div>
                            <div className="feedback-row2">
                                <textarea className="textarea-feedback">
                                    Lorem isum....
                                </textarea>
                                <div className="btn-feedback">
                                    <button className="btn-tambah">Simpan</button>
                                    <button className="btn-batal">Batal</button>
                                </div>
                                
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