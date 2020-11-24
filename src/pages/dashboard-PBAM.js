import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from "react-router-dom";
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';
import GetDataBpba from '../service/getdatabpba';

class DashboardPbam extends React.Component {
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
        if(this.state.sessionLogina === true){
            return(<Redirect to={'/'}/>)
        }
        return(
            <div className="container">
                
                <div className="side-menu">
                    <div className="user-level"><h2>PBAM</h2></div>
                    <div className="user-profile">
                        <img src={profile} width="100" height="100" alt="profile"/>
                        <h3>{localStorage.getItem('whoUser')}</h3>
                    </div>
                    <div className="side-bri-logowhite">
                        <img src={briwhite} width="200" height="120" alt="briwhite"/>
                    </div>
                    <div className="side-user-menu">
                        <ul>
                            <li><i><Icon.PersonBadgeFill size={25} /></i><Link to="/pbampba" className="linkrouter">Kelola PBA</Link></li>
                            <li><i><Icon.FileEarmarkTextFill size={25} /></i><Link to="/pbamlaporan" className="linkrouter">Kelola Laporan</Link></li>
                            <li><i><Icon.StarFill size={25} /></i><Link to="/pbamfeedback" className="linkrouter">Feedback</Link></li>
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
                                <i><Icon.PersonBadge/></i>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="level-user">PBA</div>
                        </div>
                        <div className="col3">{this.state.jumlahPba.length} PBA</div>
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

export default DashboardPbam;