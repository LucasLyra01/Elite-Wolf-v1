import React, { Component, useState } from "react";
// import './Login.css';
import "../login/Login.css";

export default function Login()  {
    
    const [isActiveEmail, setIsActiveEmail] = useState(false);    
    const [valueEmail, setValueEmail] = useState('');

    const [isActivePassword, setIsActivePassword] = useState(false);
    const [valuePassword, setValuePassword] = useState('');

    function handleTextChangeEmail(text){
      setValueEmail(text);
      if(text !== ''){
        setIsActiveEmail(true);
      }else{
        setIsActiveEmail(false);
      }
    }

    function handleTextChangePassword(text){
      setValuePassword(text);
      if(text !== ''){
        setIsActivePassword(true);
      }else{
        setIsActivePassword(false);
      }
    }

    return (
      <div className="container-principal">
        <div className="area-logo">
          <img src="/assets/Logo.svg"></img>
          <h1>
            Elite <strong>Wolf</strong>
          </h1>
        </div>

        <div className="container-conteudo">

          <h1>Bem vindo(a)</h1>

          <form>
            <div id='float-label'>
              <input
                type='email'
                valueEmail={valueEmail}
                onChange={(e) => handleTextChangeEmail(e.target.valueEmail)}
                />

              <label 
              className={ isActiveEmail ? "Active" : "" } 
              htmlFor="email">
                E-mail
              </label>
            </div>

            <div id='float-label'>
              <input 
                type='password'
                valuePassword={valuePassword}
                onChange={(e) => handleTextChangePassword(e.target.valuePassword)}
                />

              <label 
              className={ isActivePassword ? "Active" : "" } 
              htmlFor="password">
                Senha
              </label>
            </div>

            <br/>
            <div className='checkbox'>
              <input type="checkbox"/>
              <label for="senha">Lembrar senha</label>
            </div>

            <br></br>

            <button>Entrar</button>
            <br></br>
            <a href="https://www.google.com/">Esqueceu sua senha?</a>

            <p>
              Ainda não possui conta? <a href="https://www.google.com/">Cadastre-se</a>
            </p>

          </form>
        </div>
      </div>
    );
  }

