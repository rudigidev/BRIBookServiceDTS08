import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from "react-router-dom";
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';
import GetDataBpba from '../service/getdatabpba';
import PosDataBpba from '../service/postdatabpba';
import PutDataBpba from '../service/putdatabpba';

class DashboardBpbaPba extends React.Component {
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
                managed_by:''
            },
            editData: {
                id:'',
                email:'',
                password:'',
                nama:'',
                alamat:'',
                no_hp:'',
                status:'',
                managed_by:''
            } ,
            jumlahPcu:'',
            jumlahPba:'',
            jumlahPbam:'',
            emailPassing:'',
            editDataPassing:[]
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
        this.editDataByEmail = this.editDataByEmail.bind(this);
        this.updateData = this.updateData.bind(this);
        this.onEdit= this.onEdit.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.test = this.test.bind(this);
      
    }
    componentDidMount(){
            GetDataBpba('/bpba/admin/find-by-role/pba')
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

            GetDataBpba('/bpba/admin/find-by-role/pcu')
            .then ((result) => {
              let responseJSON = result;
              if(responseJSON.data){
                this.setState({jumlahPcu:responseJSON.data})
            }
              else {
                console.log("get Error");
              }
            })//PostData

            GetDataBpba('/bpba/admin/find-by-role/pba')
            .then ((result) => {
              let responseJSON = result;
              if(responseJSON.data){
                this.setState({jumlahPba:responseJSON.data})
            }
              else {
                console.log("get Error");
              }
            })//PostData

            GetDataBpba('/bpba/admin/find-by-role/pbam')
            .then ((result) => {
              let responseJSON = result;
              if(responseJSON.data){
                this.setState({jumlahPbam:responseJSON.data})
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
    test(a) {
        const box = document.getElementById('box-edit');
        const modal = document.getElementById('modals-edit');
        box.style.display= "block";
        modal.style.display= "flex";
        GetDataBpba(`/bpba/admin/find-by-email/${a.target.value}`)
        .then ((result) => {
          let responseJSON = result;
          if(responseJSON.data){
            this.setState({editDataPassing:responseJSON.data})
            console.log(this.state.editDataPassing)
        }
          else {
            console.log("get Error");
          }
        })//PostData
    }
    modalEditDataShow() {
        const box = document.getElementById('box-edit');
        const modal = document.getElementById('modals-edit');
        box.style.display= "block";
        modal.style.display= "flex";
        console.log(this.state.emailPassing)
    }
    closeBtnModalEdit(){
        const boxs = document.getElementById('box-edit');
        const modals = document.getElementById('modals-edit');
        boxs.style.display= "none";
        modals.style.display= "none";
      }
    tambahData() {
        console.log(this.state.addData)
        PosDataBpba('/bpba/admin/add/pba',this.state.addData).then ((result) => {
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
    editDataByEmail() {
        GetDataBpba(`/bpba/admin/find-by-email/${this.state.emailPassing}`)
            .then ((result) => {
              let responseJSON = result;
              if(responseJSON.data){
                this.setState({jumlahPcu:responseJSON.data})
                console.log(responseJSON.data)
            }
              else {
                console.log("get Error");
              }
            })//PostData
    }
    updateData() {
        console.log(this.state.editData)
        PutDataBpba('/bpba/admin/update',this.state.editData)
        .then ( (result) => {
            let responseJSON = result;
            if(responseJSON){
                console.log(responseJSON)
                this.componentDidMount()
                this.closeBtnModalEdit()
            }else{
                console.log('get error')
            }
        })
    }

    logout() {
        sessionStorage.setItem('user','');
        sessionStorage.clear();
        this.setState({sessionLoginbpba: true})
        
    }
    onLoad(e){
        this.setState(prevState => ({
            editData:{
            ...prevState.editData,
            [this.state.editData.id] : "test"
        }
        }))
    }
    onEdit(e){
        this.setState(prevState => ({
            editData:{
            ...prevState.editData,
            [e.target.name] : e.target.value
        }
        }))
    }
    onChanges(a) {
        this.setState(prevState => ({
            addData:{
            ...prevState.addData,
            [a.target.name] : a.target.value
        }
        }))
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
                                    <h2 className="title">Tambah Data ( PBA )</h2>
                                    <label htmlFor="name">Nama PBA</label>
                                    <input type="text" id="name" name="nama" placeholder="Nama PBA"  onChange={this.onChanges}/>

                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="lname" name="email" placeholder="Email" onChange={this.onChanges}/>

                                    <label htmlFor="password">Password</label>
                                    <input type="text" id="lname" name="password" placeholder="Password" onChange={this.onChanges}/>

                                    <label htmlFor="no_hp">Nomor Telepon</label>
                                    <input type="text" id="lname" name="no_hp" placeholder="Nomor Telepon" onChange={this.onChanges}/>
                                    
                                    <label htmlFor="role">Role</label>
                                    <select id="country" name="role" onChange={this.onChanges}>
                                        <option value="">Role</option>
                                        <option value="pba">PBA</option>
                                    </select>

                                    <label htmlFor="alamat">Alamat</label>
                                    <input type="text" id="lname" name="alamat" placeholder="Alamat" onChange={this.onChanges}/>

                                    <label htmlFor="managed_by">PBAM</label>
                                    <select id="country" name="managed_by" onChange={this.onChanges}>
                                        <option value="">Pilih PBAM</option>
                                        <option value="Ratih Rahma">Ratih Rahma</option>
                                        <option value="Wulandari">Wulandari</option>
                                    </select>
                                    <label htmlFor="status">Status</label>
                                    <select id="country" name="status" onChange={this.onChanges}>
                                        <option value="">Status</option>
                                        <option value="enable">Enable</option>
                                        <option value="disable">Disable</option>
                                    </select>
                                
                                    <button className="btn-tambah" onClick={this.tambahData}>Tambah
                                    </button>
                                    <button className="btn-batal" onClick={this.closeBtnModalTambah}>Batal</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="modal-tambah" id="modals-edit">
                        <div id="myModal" className="modal">
                            <div className="modal-content">

                                    {
                                        this.state.editDataPassing.map( (m) => (
                                            <div className="form-tambah-data" id="form-tambah-pcu" key={m.id}>
                                                <h2 className="title">Edit Data ( PBA )</h2>
                                            
                                                <label htmlFor="id">Id</label>
                                                <input type="text" name="id" defaultValue={m.id} onMouseOver={this.onEdit}/>

                                                <label htmlFor="nama">Nama PCU</label>
                                                <input type="text" id="name" name="nama" placeholder="Nama PCU" onMouseOver={this.onEdit} defaultValue={m.nama}/>

                                                <label htmlFor="email">Email</label>
                                                <input type="text" id="lname" name="email" placeholder="Email" onMouseOver={this.onEdit} defaultValue={m.email}/>

                                                <label htmlFor="password">Password</label>
                                                <input type="text" id="lname" name="password" placeholder="Password" onMouseOver={this.onEdit} defaultValue={m.password}/>

                                                <label htmlFor="no_hp">Nomor Telepon</label>
                                                <input type="text" id="lname" name="no_hp" placeholder="Nomor Telepon" onMouseOver={this.onEdit} defaultValue={m.no_hp}/>

                                                <label htmlFor="alamat">Alamat</label>
                                                <input type="text" id="lname" name="alamat" placeholder="Alamat" onMouseOver={this.onEdit} defaultValue={m.alamat}/>

                                                <label htmlFor="managed_by">PBAM</label>
                                                <select id="country" name="managed_by" onMouseOver={this.onEdit} defaultValue={m.managed_by}>
                                                    <option value="">{m.managed_by}</option>
                                                    <option value="Ratih Rahma">Ratih Rahma</option>
                                                    <option value="Wulandari">Wulandari</option>
                                                </select>
                                                <label htmlFor="status">Status</label>
                                                <select id="country" name="status" onMouseOver={this.onEdit}>
                                                    <option defaultValue={m.status}>{m.status}</option>
                                                    <option value="enable">Enable</option>
                                                    <option value="disable">Disable</option>
                                                </select>
                                            
                                                <button className="btn-tambah" onClick={this.updateData}>Update</button>
                                                <button className="btn-batal" onClick={this.closeBtnModalEdit}>Batal</button>
                                               
                                            </div>
                                        ))
                                    }

                                

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
                            <li><i><Icon.PersonCircle size={25} /></i><Link to={'bpbapcu'} className="linkrouter">Kelola PCU</Link></li>
                            <li className="menu-selected"><i><Icon.PersonCircle size={25} /></i>Kelola PBA</li>
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
                        <div className="col3">Total User : {this.state.jumlahPcu.length} Nasabah</div>
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
                        <div className="col3">Total User :  {this.state.jumlahPba.length} Staff</div>
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
                        <div className="col3">Total User :  {this.state.jumlahPbam.length} Manager</div>
                    </div>
                    
                    

                    {/* Data Passing Disini */}
                    <div className="row2">
                        <div className="col4" id="tempatdata">

                        <div className="tabel-user-data">
                                <h2>Data Personal Banking Assistent ( PBA )</h2>
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
                                    <th>PBAM</th>
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
                                        <td>{data.managed_by}</td>
                                        <td>{data.status}</td>
                                        <td><button className="btn-edit" onClick={this.test} name="emailPassing" value={data.email} id="btn-edit-table">Edit</button></td>
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

export default DashboardBpbaPba;