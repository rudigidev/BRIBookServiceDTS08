import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from "react-router-dom";
import '../style/dashboard.css';
import briwhite from '../img/logobriwhite.png';
import profile from '../img/imgprofile.png';
import * as Icon from 'react-bootstrap-icons';
import PostDataBpba from '../service/postdatabpba';

class DashboardBpba extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        sessionLoginbpba: false,
        test:true
        }
        this.logout = this.logout.bind(this);
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
                    


                </div>

            </div>
        );
    }
}

export default DashboardBpba;