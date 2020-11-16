import React from 'react';
import '../style/login.css';
import logobri from '../img/logobookingservice.png';


class LoginPage extends React.Component {
    render() {
  return (
    <div className="login-page">
      <div className="logo">
        <img src={logobri} width="250" height="150" alt="logobri"/>
      </div>
      <input className="login-input-form" type="email" placeholder="Email"/>
      <br/>
      <input className="login-input-form" type="password" placeholder="Password"/>
      <br/>
      <button className="btn-login-masuk">Masuk</button>
      <p><a href="#" className="lupa-password">Lupa Password?</a></p>
    </div>
  );
    }
}

export default LoginPage;
