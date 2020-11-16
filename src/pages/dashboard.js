import React from 'react';
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import iconcard from '../img/img-cards.png';
import * as Icon from 'react-bootstrap-icons';

class Dashboard extends React.Component {
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
                            <li><i><Icon.PersonFill size={25} /></i>Kelola PCU</li>
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
                                <img src={iconcard} width="130" height="130" alt="icon-user" />
                            </div>
                            <div className="level-user">PCU</div>
                        </div>
                        <div className="col2">Total User : 40 Nasabah</div>
                    </div>

                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                                <img src={iconcard} width="130" height="130" alt="icon-user" />
                            </div>
                            <div className="level-user">PBA</div>
                        </div>
                        <div className="col2">Total User : 10 Staff</div>
                    </div>

                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                                <img src={iconcard} width="130" height="130" alt="icon-user" />
                            </div>
                            <div className="level-user">PBAM</div>
                        </div>
                        <div className="col2">Total User : 2 Manager</div>
                    </div>
                    
                    <div className="row2">
                        <div className="col3">
                            <h2>Data Premium Customer ( PCU )</h2>
                            <table className="table-data-user">
                        <tr>
                            <th>Id PCU</th>
                            <th>Nama</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>PBA</th>
                            <th>Status</th>
                            <th>Opsi</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nama</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>example@mail.com</td>
                            <td>Revi M.</td>
                            <td>Aktif</td>
                            <td>
                                <button>Edit</button>
                            </td>
                        </tr>
                    </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;