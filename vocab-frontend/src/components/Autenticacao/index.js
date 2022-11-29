import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Autenticacao(props) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userCadastro, setUserCadastro] = useState("")
    const [passwordCadastro, setPasswordCadastro] = useState("")
    const navigate = useNavigate()
    const options = { headers: {'Content-Type':'application/json', 'Accept':'application/json'} };

    function enviarInfoLogin(event){
        event.preventDefault();
        axios
          .post('http://127.0.0.1:8000/api/palavras/token/',{username: user, password: password}, options)
          .then((response) => {
            const acesso = response.data.token;
            console.log(acesso);
            navigate("/uno", { state: acesso })
            setUser("");
            setPassword("");
        });
      }

    function enviarInfoCadastro(event){
        event.preventDefault();
        axios
            .post('http://127.0.0.1:8000/api/cadastro/',{username: userCadastro, password: passwordCadastro}, options)
            .then((response) => {
            const acesso = response.data.token;
            navigate("/uno", { state: acesso })
            setUserCadastro("");
            setPasswordCadastro("");
        });
    }

    const userChanged = (event) => { setUser(event.target.value); }
    const passwordChanged = (event) => { setPassword(event.target.value); }
    const userCadastroChanged = (event) => { setUserCadastro(event.target.value); }
    const passwordCadastroChanged = (event) => { setPasswordCadastro(event.target.value); }
    return (
        <div className="centro">
            <form className="formulario" onSubmit={enviarInfoLogin}>
                <h1>LOGIN</h1>
                <label className="label" htmlFor="user">Username:</label>
                <input className="information" type="text" name="user" placeholder="Coloque o username" onChange={userChanged} value={user}/>
                <label className="label" htmlFor="password">Senha:</label>
                <input className="information" type="text" name="password" placeholder="Coloque a senha" onChange={passwordChanged} value={password}/>
                <button className="btn" type="submit">Entrar</button>
            </form>
            <form className="formulario" onSubmit={enviarInfoCadastro}>
                <h1>CADASTRO</h1>
                <label className="label" htmlFor="user">Username:</label>
                <input className="information" type="text" name="user" placeholder="Crie um username" onChange={userCadastroChanged} value={userCadastro}/>
                <label className="label" htmlFor="password">Senha:</label>
                <input className="information" type="text" name="password" placeholder="Crie uma senha" onChange={passwordCadastroChanged} value={passwordCadastro}/>
                <button className="btn" type="submit">Entrar</button>
            </form>
        </div>
    );
}