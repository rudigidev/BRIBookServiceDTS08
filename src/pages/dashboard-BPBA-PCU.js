import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from "react-router-dom";
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';
import GetDataBpba from '../service/getdatabpba';
import PosDataBpba from '../service/postdatabpba';

class DashboardBpbaPcu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionLoginbpba: false,
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
                status:'',
                assisted_by:''
            },
            editData: {
                email:'',
                password:'',
                nama:'',
                alamat:'',
                no_hp:'',
                status:'',
                assisted_by:''
            } 
        }
        this.logout = this.logout.bind(this);
        this.cariData = this.cariData.bind(this);
        this.onChange = this.onChange.bind(this);
        this.closeBtnModalTambah = this.closeBtnModalTambah.bind(this);
        this.modalTambahShow = this.modalTambahShow.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onChanges = this.onChanges.bind(this);
        this.tambahData = this.tambahData.bind(this);
        this.modalEditDataShow = this.modalEditDataShow.bind(this);
        this.closeBtnModalEdit = this.closeBtnModalEdit.bind(this);
      
    }
    componentDidMount(){
            let htlmElement = ''
            GetDataBpba('/bpba/admin/find-by-role/pcu')
            .then ((result) => {
              let responseJSON = result;
              if(responseJSON.data){
                this.setState({dataGet:responseJSON.data})
                console.log(this.state.dataGet)
                console.log(this.state.inputCari)
            }
              else {
                console.log("get Error");
              }
            })//PostData
    }
    modalTambahShow() {
        const box = document.getElementById('box');
        const modal = document.getElementById('modals');
        box.style.display= "block";
        modal.style.display= "flex";
    }
    closeBtnModalTambah(){
      const box = document.getElementById('box');
      const modal = document.getElementById('modals');
      box.style.display= "none";
      modal.style.display= "none";
    }
    modalEditDataShow() {
        const box = document.getElementById('box-edit');
        const modal = document.getElementById('modals-edit');
        box.style.display= "block";
        modal.style.display= "flex";
    }
    closeBtnModalEdit(){
        const boxs = document.getElementById('box-edit');
        const modals = document.getElementById('modals-edit');
        boxs.style.display= "none";
        modals.style.display= "none";
      }
    tambahData() {
        console.log(this.state.addData)
        PosDataBpba('/bpba/admin/add/pcu',this.state.addData).then ((result) => {
            let responseJSON = result;
            console.log(responseJSON);
            this.closeBtnModalTambah()
            this.componentDidMount()
            if(responseJSON.message){
                console.log('Data Berhasil Disimpan')
            }
            else {
            console.log("Login Error");
            }
        })
    }
    cariData() {
        let htlmElement = ''
        GetDataBpba(`/bpba/admin/find-by-name/${this.state.inputCari}`)
        .then ((result) => {
          let responseJSON = result;
          if(responseJSON.data){
            this.setState({dataGet:responseJSON.data})
            console.log(this.state.dataGet)
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
    onChanges(a) {
        this.setState(prevState => ({
            addData:{
            ...prevState.addData,
            [a.target.name] : a.target.value
        }
        }))
        // this.setState({[a.target.name] : a.target.value});
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
                    <div className="box" id="box"></div>
                    <div className="box" id="box-edit"></div>

                    <div className="modal-tambah" id="modals">
                        <div id="myModal" className="modal">
                            <div className="modal-content">

                                <div className="form-tambah-data" id="form-tambah-pcu">
                                    <h2 className="title">Tambah Data ( PCU )</h2>
                                    <label htmlFor="name">Nama PCU</label>
                                    <input type="text" id="name" name="nama" placeholder="Nama PCU" onChange={this.onChanges}/>

                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="lname" name="email" placeholder="Email" onChange={this.onChanges}/>

                                    <label htmlFor="password">Password</label>
                                    <input type="text" id="lname" name="password" placeholder="Password" onChange={this.onChanges}/>

                                    <label htmlFor="no_hp">Nomor Telepon</label>
                                    <input type="text" id="lname" name="no_hp" placeholder="Nomor Telepon" onChange={this.onChanges}/>
                                    
                                    <label htmlFor="role">Role</label>
                                    <select id="country" name="role" onChange={this.onChanges}>
                                        <option value="">Role</option>
                                        <option value="pcu">PCU</option>
                                    </select>

                                    <label htmlFor="alamat">Alamat</label>
                                    <input type="text" id="lname" name="alamat" placeholder="Alamat" onChange={this.onChanges}/>

                                    <label htmlFor="assisted_by">PBA</label>
                                    <select id="country" name="assisted_by" onChange={this.onChanges}>
                                        <option value="">Pilih PBA</option>
                                        <option value="Revi Mariska">Revi Mariska</option>
                                        <option value="Danang Mulyo">Danang Mulyo</option>
                                        <option value="Ananda Rizky">Ananda Rizky</option>
                                    </select>
                                    <label htmlFor="status">Status</label>
                                    <select id="country" name="status" onChange={this.onChanges}>
                                        <option value="">Status</option>
                                        <option value="enable">Enable</option>
                                        <option value="disable">Disable</option>
                                    </select>
                                
                                    <button className="btn-tambah" onClick={this.tambahData}>Tambah</button>
                                    <button className="btn-batal" onClick={this.closeBtnModalTambah}>Batal</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="modal-tambah" id="modals-edit">
                        <div id="myModal" className="modal">
                            <div className="modal-content">

                                <div className="form-tambah-data" id="form-tambah-pcu">
                                    <h2 className="title">Edit Data ( PCU )</h2>
                                    <label htmlFor="name">Nama PCU</label>
                                    <input type="text" id="name" name="nama" placeholder="Nama PCU" onChange={this.onChanges}/>

                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="lname" name="email" placeholder="Email" onChange={this.onChanges}/>

                                    <label htmlFor="password">Password</label>
                                    <input type="text" id="lname" name="password" placeholder="Password" onChange={this.onChanges}/>

                                    <label htmlFor="no_hp">Nomor Telepon</label>
                                    <input type="text" id="lname" name="no_hp" placeholder="Nomor Telepon" onChange={this.onChanges}/>

                                    <label htmlFor="alamat">Alamat</label>
                                    <input type="text" id="lname" name="alamat" placeholder="Alamat" onChange={this.onChanges}/>

                                    <label htmlFor="assisted_by">PBA</label>
                                    <select id="country" name="assisted_by" onChange={this.onChanges}>
                                        <option value="">Pilih PBA</option>
                                        <option value="Revi Mariska">Revi Mariska</option>
                                        <option value="Danang Mulyo">Danang Mulyo</option>
                                        <option value="Ananda Rizky">Ananda Rizky</option>
                                    </select>
                                    <label htmlFor="status">Status</label>
                                    <select id="country" name="status" onChange={this.onChanges}>
                                        <option value="">Status</option>
                                        <option value="enable">Enable</option>
                                        <option value="disable">Disable</option>
                                    </select>
                                
                                    <button className="btn-tambah" onClick={this.updateData}>Tambah</button>
                                    <button className="btn-batal" onClick={this.closeBtnModalEdit}>Batal</button>
                                </div>

                            </div>
                        </div>
                    </div>

                
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
                            <li className="menu-selected"><i><Icon.PersonCircle size={25} /></i>Kelola PCU</li>
                            <li><i><Icon.PersonBadgeFill size={25} /></i><Link to={'bpbapba'} className="linkrouter">Kelola PBA</Link></li>
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
                                <h2>Data Premium Customer ( PCU )</h2>
                                <button className="btn-plus" onClick={this.modalTambahShow}>+</button>
                            <input type="search" placeholder="Masukan Nama" className="search-form" onChange={this.onChange}/><span><button className="btn-edit" onClick={this.cariData} >Cari</button></span>
                            <table className="table-data-user" >
                            <thead>
                                <tr>
                                    <th>Id PCU</th>
                                    <th>Nama</th>
                                    <th>Password</th>
                                    <th>Email</th>
                                    <th>Alamat</th>
                                    <th>PBA</th>
                                    <th>Status</th>
                                    <th>Opsi</th>
                                </tr>
                            </thead>
                            <tbody id="table-pcu">
                               {this.state.dataGet.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.nama}</td>
                                        <td>********</td>
                                        <td>{data.email}</td>
                                        <td>{data.alamat}</td>
                                        <td>{data.assisted_by}</td>
                                        <td>{data.status}</td>
                                        <td><button className="btn-edit" onClick={this.modalEditDataShow}>Edit</button></td>
                                    </tr>  
                         
                               ))}
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

export default DashboardBpbaPcu;