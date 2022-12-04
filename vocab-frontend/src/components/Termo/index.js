import React from "react";
import Words from "../Words";
import Appbar from "../Appbar";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Termo(props) {
    const [vocabs, setVocabs] = useState([]); // Remova o array de notes que existia na versão anterior
    const { state } = useLocation()

    useEffect(() => {
      const acesso = 'Token ' + state;
      axios
        .get("http://127.0.0.1:8000/api/palavras/rand/", { headers: { 'Content-Type':'application/json', 'Accept':'application/json', 'Authorization': acesso } })
        .then((res) => {setVocabs(res.data);
          console.log(res.data);
          console.log('entrou');}
        );
    }, []);

    function reiniciarJogo() {
      const acesso = 'Token ' + state;
      axios
        .get("http://127.0.0.1:8000/api/palavras/rand/", { headers: { 'Content-Type':'application/json', 'Accept':'application/json', 'Authorization': acesso } })
        .then((res) => {setVocabs(res.data);
          console.log(vocabs);
          console.log(res.data);
          console.log('entrou');});
    };  
  
    return (
    <React.Fragment>
        <Appbar state={state}/>
        <audio src="water.mp3" autoPlay loop />
        <Words palavra={vocabs.palavra} reestart={reiniciarJogo}></Words>
    </React.Fragment>
    );
}