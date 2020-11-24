import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from "react-router-dom";
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';
import GetDataBpba from '../service/getdatabpba';

class DashboardBpba extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        sessionLoginbpba: false,
        jumlahPcu:'',
        jumlahPba:'',
        jumlahPbam:''
        }
        this.logout = this.logout.bind(this);
        this.first = this.first.bind(this);
    }
    componentDidMount(){
        this.first();
    }
    first(){
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
    logout() {
        sessionStorage.setItem('user','');
        sessionStorage.clear();
        localStorage.setItem('whoUser','');
        localStorage.clear();
        this.setState({sessionLoginbpba: true})
        
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
                        <div className="col3">Total User : {this.state.jumlahPba.length} Staff</div>
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
                        <div className="col3">Total User : {this.state.jumlahPbam.length} Manager</div>
                    </div>
                    


                </div>

            </div>
        );
    }
}

export default DashboardBpba;