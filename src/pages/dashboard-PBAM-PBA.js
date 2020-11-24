import React from 'react';
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
import GetDataBpba from '../service/getdatabpba';

class DashboardPbamPba extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        sessionLogina: false,
        dataGet:[],
            inputCari:'',
            modalShow: false,
            addData: {
                email:'',
                password:'',
                nama:'',
                alamat:'',
                no_hp:'',
                role:'',
                status:''
            },
            editData: {
                id:'',
                email:'',
                password:'',
                nama:'',
                alamat:'',
                no_hp:'',
                status:''
            } ,
            jumlahPcu:'',
            jumlahPba:'',
            jumlahPbam:'',
            emailPassing:'',
            editDataPassing:[]
        }
        this.logout = this.logout.bind(this);
    }
    componentDidMount(){
        GetDataBpba('/pbam/manager/list-pba')
            .then ((result) => {
              let responseJSON = result;
              if(responseJSON.data){
                this.setState({dataGet:responseJSON.data, jumlahPba:responseJSON.data})
                console.log(this.state.dataGet)
                console.log(this.state.inputCari)
            }
              else {
                console.log("get Error");
              }
            })//PostData
    }
    logout() {
        sessionStorage.setItem('user','');
        sessionStorage.clear();
        this.setState({sessionLogina: true})
    }
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
                            <li className="menu-selected"><i><Icon.PersonBadgeFill size={25} /></i>Kelola PBA</li>
                            <li><i><Icon.FileEarmarkTextFill size={25} /></i><Link to="/pbamlaporan" className="linkrouter">Kelola Laporan</Link></li>
                            <li><i><Icon.StarFill size={25} /></i><Link to="/pbamfeedback" className="linkrouter">Feedback</Link></li>
                        </ul>
                    </div>
                    <div className="side-logout">
                    <Link to="/"><button className="btn-logout" onClick={this.logout}>Logout</button></Link>
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
                            <div className="level-user">03PBA</div>
                        </div>
                        <div className="col3">Total PBA</div>
                    </div>

                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                            <i><Icon.PersonBadge/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user">02PBA</div>
                        </div>
                        <div className="col3">Aktif</div>
                    </div>
                    
                    <div className="row">
                        <div className="col1">
                            <div className="icon-user">
                            <i><Icon.PersonBadge/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user">01PBA</div>
                        </div>
                        <div className="col3">Cuti</div>
                    </div>

                    {/* Data Passing Disini */}
                    <div className="row2">
                        <div className="col4">

                        <div className="tabel-user-data">
                                <h2>Daftar PBA</h2>
                            <table className="table-data-user">
                        <tr>
                            <th>Nama PBA</th>
                            <th>Alamat</th>
                            <th>No. Hp</th>
                            <th>Status</th>
                            <th>Daftar PCU</th>
                            <th>Jadwal</th>
                        </tr>
                        <tr>
                            <td>Revi Mariska</td>
                            <td>Jl. Lorem Isum</td>
                            <td>085xxxxxxxx</td>
                            <td>Aktif</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            <td>
                                <button className="btn-edit">Lihat</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Ananda Rahma</td>
                            <td>Jl. Lorem Isum</td>
                            <td>085xxxxxxxx</td>
                            <td>Aktif</td>
                            <td>
                            <button className="btn-edit">Edit</button>
                            </td>
                            <td>
                                <button className="btn-edit">Lihat</button>
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