import React, { Component } from "react";
// import './Login.css';
import "../login/Login.css";

export default class Login extends Component {
  render() {
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
            <img src='/assets/icon-email.png'></img>
            <label>E-mail</label>
            <br></br>
            <input
              type="text"
              id="email"
              placeholder="Digite seu email"
            ></input>
            <br></br>
            
            <label><img src='/assets/icon-senha.png'></img>Senha</label>
            <br></br>
            <input
              type="password"
              id="password"
              placeholder="Digite a sua senha"
            ></input>
            <br></br>
            <input type="checkbox" />
            <label for="senha">Lembrar senha</label>
            <br></br>
            <br></br>
            <button>Entrar</button>
            <br></br>
            <a href="https://www.google.com/">Esqueceu sua senha?</a>
            <br></br>

            <p>
              Ainda não possui conta?{" "}
              <a href="https://www.google.com/">Cadastre-se</a>
            </p>

            <br></br><br></br><br></br>
            <label className='teste'> <img src='/assets/icon-email.png'></img>  Teste</label>
          </form>
        </div>
      </div>
    );
  }
}
