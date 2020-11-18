import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from "react-router-dom";
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';

class DashboardBpbaPbam extends React.Component {
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
                            <li><i><Icon.PersonCircle size={25} /></i><Link to={'bpbapcu'} className="linkrouter">Kelola PCU</Link></li>
                            <li><i><Icon.PersonBadgeFill size={25} /></i><Link to={'bpbapba'} className="linkrouter">Kelola PBA</Link></li>
                            <li className="menu-selected"><i><Icon.PersonBadge size={25} /></i>Kelola PBAM</li>
                        </ul>
                    </div>
                    <div className="side-logout">
                    <Link to="/"><button className="btn-logout" >Logout</button></Link>
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
                        <div className="tabel-user-data">
                                <h2>Data Premium Customer ( PCU )</h2>
                                <button className="btn-plus">+</button>
                            <input type="search" className="search-form"/><span><button className="btn-edit">Cari</button></span>
                            <table className="table-data-user">
                        <tr>
                            <th>Id PCU</th>
                            <th>Nama</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Opsi</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nama</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>example@mail.com</td>
                         
                            <td>Aktif</td>
                            <td>
                                <button className="btn-edit">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nama</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>example@mail.com</td>
                          
                            <td>Aktif</td>
                            <td>
                                <button className="btn-edit">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Nama</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>example@mail.com</td>
                            
                            <td>Disabled</td>
                            <td>
                                <button className="btn-edit">Edit</button>
                            </td>
                        </tr>
                    </table>
                </div>
                        
                        </div>
                    </div>
                    {/* Data Passing Disini */}
                    
                </div>

            </div>
        );
    }
}

export default DashboardBpbaPbam;