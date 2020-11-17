import React from 'react';
import '../style/dashboard-PBAM-PBA.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import iconcard from '../img/img-cards.png';
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
                            <li><i><Icon.StarFill size={25} /></i>Feedback</li>
                        </ul>
                    </div>
                    <div className="side-logout">
                        <button className="btn-logout">Logout</button>
                    </div>
                </div>

                <div className="main-menu">

                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                                <i><Icon.PersonBadge/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user">PBA</div>
                        </div>
                        <div className="col3">10 PBA</div>
                    </div>

                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                            <i><Icon.FileEarmarkTextFill/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user longtext">Laporan</div>
                        </div>
                        <div className="col3">90 Laporan</div>
                    </div>
                    
                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                            <i><Icon.PersonBadge/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user longtext">Feedback</div>
                        </div>
                        <div className="col3">90 Feedback</div>
                    </div>

                </div>

            </div>
        );
    }
}

export default DashboardPbamPba;