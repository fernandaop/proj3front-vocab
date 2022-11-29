import React, { useState } from "react";
import "./index.css";
import axios from "axios";

export default function Autenticacao(props) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    
    // const options = { headers: {'Content-Type':'application/json', 'Accept':'application/json'} };
    // const userEmail = user + "@"


    function enviarInfo(event){
        event.preventDefault();
        axios
          .post('http://127.0.0.1:8000/api/palavras/token',{username: user, password: password}, options)
          .then((response) => {
            const acesso = 'Token ' + response.data.accessToken;
            const options2 = { headers: {'Content-Type':'application/json', 'Accept':'application/json', 'Authorization':acesso} };
            return acesso;
          });
      }

    const userChanged = (event) => { setUser(event.target.value); }
    const passwordChanged = (event) => { setPassword(event.target.value); }
    return (
        <div className="centro">
            <form className="formulario" onSubmit={enviarInfo}>
                <label className="label" htmlFor="user">Username:</label>
                <input className="information" type="text" name="user" placeholder="Coloque o username" onChange={userChanged} value={user}/>
                <label className="label" htmlFor="password">Senha:</label>
                <input className="information" type="text" name="password" placeholder="Coloque a senha" onChange={passwordChanged} value={password}/>
                <button className="btn" type="submit">Entrar</button>
            </form>
        </div>
    );
}