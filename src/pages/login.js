import React from 'react';
import '../style/login.css';
import logobri from '../img/logobookingservice.png';
import history from '../history.js';
import { logRoles } from '@testing-library/react';
import {BrowserRouter as Router,Switch,Route,Link,useParams, Redirect} from 'react-router-dom';
import LoginRole from '../service/login-role.js';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      // role:'',
      // login: false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    // let a = JSON.stringify(this.state);
    // console.log(a);
    LoginRole('/auth/login',this.state).then ((result) => {
      var responseJSON = result;
      console.log(responseJSON);
    })

  //   if(this.state.username === ''){
  //     return alert('Email Belum Diisi');
  // }else if(this.state.username !== '' && this.state.password === ''){
  //     return alert('Password Belum Diisi');
  // }else if(this.state.username === 'admin' && this.state.password === 'admin'){
  //     this.setState({login:true,role:'bpba'})
  // }else if (this.state.username === 'admin2' && this.state.password === 'admin2'){
  //   this.setState({login:true,role:'pbam'})
  // }
}
  onChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }

    render() { 
      if(this.state.login && this.state.role ==='bpba'){
        return (<Redirect to={'/bpba'}/>);
      }else if(this.state.login && this.state.role ==='pbam'){
        return(<Redirect to={'/pbam'}/>);
      }else{
     
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
