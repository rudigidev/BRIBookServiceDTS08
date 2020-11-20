import React from 'react';
import '../style/login.css';
import logobri from '../img/logobookingservice.png';
import history from '../history.js';
import { logRoles } from '@testing-library/react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from 'react-router-dom';
import PostData from '../service/login-role.js';


class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      role:'',
      sessionLogin: false,
      whoUser:'',
      token:''
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    if(this.state.email && this.state.password){
      PostData('/auth/login',this.state).then ((result) => {
        let responseJSON = result;
        if(responseJSON.user){
          this.setState({sessionLogin: true, role:responseJSON.user.role,whoUser:responseJSON.user.nama,token:responseJSON.token})
          sessionStorage.setItem('user', this.state.token);
          localStorage.setItem('whoUser',this.state.whoUser)
          console.log(this.state)
        }
        else {
          console.log("Login Error");
        }
      })//LoginRole
    }//main if
}
  onChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }
    
    render() { 
      if(this.state.sessionLogin && this.state.role ==='bpba'){
        return (<Redirect to={'/bpba'}/>);
      }else if(this.state.sessionLogin && this.state.role ==='pbam'){
        return(<Redirect to={'/pbam'}/>);
      }else {
        return (
          <div className="login-page">
            <div className="logo">
              <img src={logobri} width="250" height="150" alt="logobri"/>
            </div>
            <input className="login-input-form" type="email" placeholder="Email" name="email" autoComplete="off" onChange={this.onChange} />
            <br/>
            <input className="login-input-form" type="password" placeholder="Password" name="password" autoComplete="off" onChange={this.onChange} />
            <br/>
            <button className="btn-login-masuk" onClick={this.login}>Masuk</button>
            <p><a href="#" className="lupa-password">Lupa Password?</a></p>
          </div>
        );
    }
    }//render
}//class login

export default LoginPage;
