import React, { useState } from 'react';
import LoginEmail from './LoginEmail';
import LoginGoogle from './LoginGoogle';
import './Login.css';

function Login() {
  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <LoginEmail />
      <div className="divider">
        <span>OR</span>
      </div>
      <LoginGoogle />
    </div>
  );
}

export default Login; 