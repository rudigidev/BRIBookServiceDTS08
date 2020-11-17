import React from 'react';
import '../style/dashboard-BPBA.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import iconcard from '../img/img-cards.png';
import * as Icon from 'react-bootstrap-icons';

class DashboardBpba extends React.Component {
    render() {
        return(
            <div className="container">
                
                <div className="side-menu">
                    <div className="user-level"><h2>BPBA</h2></div>
                    <div className="user-profile">
                        <img src={profile} width="100" height="100" alt="profile"/>
                        <h3>Rudi Giyarto</h3>
                    </div>
                    <div className="side-bri-logowhite">
                        <img src={briwhite} width="200" height="120" alt="briwhite"/>
                    </div>
                    <div className="side-user-menu">
                        <ul>
                            <li><i><Icon.PersonCircle size={25} /></i>Kelola PCU</li>
                            <li><i><Icon.PersonBadgeFill size={25} /></i>Kelola PBA</li>
                            <li><i><Icon.PersonBadge size={25} /></i>Kelola PBAM</li>
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
                                <i><Icon.PersonCircle/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user">PCU</div>
                        </div>
                        <div className="col3">Total User : 40 Nasabah</div>
                    </div>

                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                            <i><Icon.PersonBadgeFill/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user">PBA</div>
                        </div>
                        <div className="col3">Total User : 40 Staff</div>
                    </div>
                    
                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                            <i><Icon.PersonBadge/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user">PBAM</div>
                        </div>
                        <div className="col3">Total User : 40 Manager</div>
                    </div>
                    {/* Data Passing Disini */}
                    <div className="row2">
                        <div className="col4">
                        
                       

                        </div>
                    </div>
                    {/* Data Passing Disini */}
                    
                </div>

            </div>
        );
    }
}

export default DashboardBpba;