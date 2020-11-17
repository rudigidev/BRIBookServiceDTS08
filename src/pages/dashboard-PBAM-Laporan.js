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
                            <li className="menu-selected"><i><Icon.FileEarmarkTextFill size={25} /></i>Kelola Laporan</li>
                            <li><i><Icon.StarFill size={25} /></i>Feedback</li>
                        </ul>
                    </div>
                    <div className="side-logout">
                        <button className="btn-logout">Logout</button>
                    </div>
                </div>

                <div className="main-menu">

                    <div className="row">
                        
                        <div className="col2">
                            <div className="level-user approve">05</div>
                        </div>
                        <div className="col3">Belum Di Approve</div>
                    </div>

                    <div className="row">
                        
                        <div className="col2">
                            <div className="level-user notapprove">08</div>
                        </div>
                        <div className="col3">Sudah Di Approve</div>
                    </div>
                    
                    <div className="row">
                        
                        <div className="col2">
                            <div className="level-user done">15</div>
                        </div>
                        <div className="col3">Selesai</div>
                    </div>

                    {/* Data Passing Disini */}
                    <div className="row2">
                        <div className="col4">

                        <div className="tabel-user-data">
                                <h2>Jadwal Pertemuan</h2>
                            <table className="table-data-user">
                        <tr>
                            <th>Nama PBA</th>
                            <th>Nama PCU</th>
                            <th>Tanggal</th>
                            <th>Waktu</th>
                            <th>Tempat</th>
                            <th>Status</th>
                            <th>Opsi</th>
                        </tr>
                        <tr>
                            <td>Revi Mariska</td>
                            <td>Tuti Wardani</td>
                            <td>15-11-2020</td>
                            <td>13:00</td>
                            <td>Kantor A</td>
                            <td>Diterima</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Danang Mulyo</td>
                            <td>12-11-2020</td>
                            <td>10:00</td>
                            <td>Kantor A</td>
                            <td>Selesai</td>
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

export default DashboardPbamPba;