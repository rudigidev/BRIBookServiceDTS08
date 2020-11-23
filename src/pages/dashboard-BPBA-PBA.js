import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from "react-router-dom";
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';
import GetDataBpba from '../service/getdatabpba';

class DashboardBpbaPba extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionLoginbpba: false,
            dataGet:[],
            inputCari:''
        }
        this.logout = this.logout.bind(this);
        this.cariData = this.cariData.bind(this);
        this.onChange = this.onChange.bind(this);
        this.testBtn = this.testBtn.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      
    }
    componentDidMount(){
            let htlmElement = ''
            GetDataBpba('/bpba/admin/find-by-role/pba')
            .then ((result) => {
              let responseJSON = result;
              if(responseJSON.data){
                this.setState({dataGet:responseJSON.data})
                console.log(this.state.dataGet)
                console.log(this.state.inputCari)
                let data = this.state.dataGet;
                data.map((datas) => {
             
                    htlmElement += `
                        <tr>
                            <td>${datas.id}</td>
                            <td>${datas.nama}</td>
                            <td>********</td>
                            <td>${datas.email}</td>
                            <td>${datas.assisted_by}</td>
                            <td>${datas.status}</td>
                            <td>
                                <button className="btn-edit" id="btn-edit">Edit</button>
                            </td>
                        <tr>
                `;
                
                });
                document.getElementById('table-pcu').innerHTML = htlmElement; 
              }
              else {
                console.log("get Error");
              }
            })//PostData
    }
    testBtn(){
       let tambahForm = '';
       tambahForm += `
            <div className="form-tambah-edit-data" id="form-tambah">
                <h2 className="title">Tambah Data ( PCU )</h2>
                <label for="name">Nama PCU</label>
                <input type="text" id="name" name="firstname" placeholder="Nama PCU"/>

                <label for="username">Username</label>
                <input type="text" id="lname" name="username" placeholder="Username"/>

                <label for="password">Password</label>
                <input type="text" id="lname" name="password" placeholder="Password"/>

                <label for="email">Email</label>
                <input type="text" id="lname" name="email" placeholder="Email"/>

                <label for="PBA">PBA</label>
                <select id="country" name="PBA">
                    <option value="">Pilih PBA</option>
                    <option value="1">Revi Mariska</option>
                    <option value="2">Danang Mulyo</option>
                    <option value="3">Ananda Rizky</option>
                </select>
                <label for="status">Status</label>
                <select id="country" name="status">
                    <option value="">Status</option>
                    <option value="1">Aktif</option>
                    <option value="2">Disabled</option>
                </select>
            
                <button className="btn-tambah" id="btn-tambah-data">Tambah</button>
                <button className="btn-batal" id="btn-batal-data" onClick="${this.componentDidMount}">Batal</button>
                    
            </div>

       `;
        document.getElementById('tempatdata').innerHTML= tambahForm;
    }
    cariData() {
        let htlmElement = ''
        GetDataBpba(`/bpba/admin/find-by-name/${this.state.inputCari}`)
        .then ((result) => {
          let responseJSON = result;
          if(responseJSON.data){
            this.setState({dataGet:responseJSON.data})
            console.log(this.state.dataGet)
            let data = this.state.dataGet;
            data.map((datas) => {
             
                htlmElement += `
                    <tr>
                        <td>${datas.id}</td>
                        <td>${datas.nama}</td>
                        <td>********</td>
                        <td>${datas.email}</td>
                        <td>${datas.assisted_by}</td>
                        <td>${datas.status}</td>
                        <td>
                            <button className="btn-edit" id="btn-edit">Edit</button>
                        </td>
                    <tr>
            `;
            
            });
            document.getElementById('table-pcu').innerHTML = htlmElement; 
          }
          else {
            console.log("get Error");
          }
        })//PostData
    }

    logout() {
        sessionStorage.setItem('user','');
        sessionStorage.clear();
        this.setState({sessionLoginbpba: true})
        
    }
    onChange(e) {
        if(e.target.value === ''){
            return this.componentDidMount();
        }else if (e.target.value !== ''){
            return this.setState({inputCari : e.target.value});
        }
    }
        
    render() {
        if(this.state.sessionLoginbpba === true){
            return(<Redirect to={'/'}/>)
        }
        return(
            <div className="container">
                
                <div className="side-menu">
                    <div className="user-level"><h2>BPBA</h2></div>
                    <div className="user-profile">
                        <img src={profile} width="100" height="100" alt="profile"/>
                        <h3>{localStorage.getItem('whoUser')}</h3>
                    </div>
                    <div className="side-bri-logowhite">
                        <img src={briwhite} width="200" height="120" alt="briwhite"/>
                    </div>
                    <div className="side-user-menu">
                        <ul>
                            <li><i><Icon.PersonCircle size={25} /></i><Link to={'bpbapcu'} className="linkrouter">Kelola PCU</Link></li>
                            <li className="menu-selected"><i><Icon.PersonBadgeFill size={25} /></i>Kelola PBA</li>
                            <li><i><Icon.PersonBadge size={25} /></i><Link to={'bpbapbam'} className="linkrouter">Kelola PBAM</Link></li>
                        </ul>
                    </div>
                    <div className="side-logout">
                    <button className="btn-logout" onClick={this.logout}>Logout</button>
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
                        <div className="col4" id="tempatdata">
                        <div className="tabel-user-data">
                                <h2>Data Personal Banking Assistent ( PBA )</h2>
                                <button className="btn-plus" onClick={this.testBtn}>+</button>
                            <input type="search" className="search-form" onChange={this.onChange}/><span><button className="btn-edit" onClick={this.cariData} >Cari</button></span>
                            <table className="table-data-user" >
                            <thead>
                                <tr>
                                    <th>Id PCU</th>
                                    <th>Nama</th>
                                    <th>Password</th>
                                    <th>Email</th>
                                    <th>PBAM</th>
                                    <th>Status</th>
                                    <th>Opsi</th>
                                </tr>
                            </thead>
                            <tbody id="table-pcu">

                            </tbody>
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

export default DashboardBpbaPba;