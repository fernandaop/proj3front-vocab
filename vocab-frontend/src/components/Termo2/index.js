import React from "react";
import Due from "../Due";
import Appbar from "../Appbar";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Termo(props) {
    const [vocabs, setVocabs] = useState([]); // Remova o array de notes que existia na versão anterior
    const [vocabsDue, setVocabsDue] = useState([]);
    const { state } = useLocation()

    useEffect(() => {
      const acesso = 'Token ' + state;
      axios
        .get("http://127.0.0.1:8000/api/palavras/rand/", { headers: { 'Content-Type':'application/json', 'Accept':'application/json', 'Authorization': acesso } })
        .then((res) => {setVocabs(res.data);
          console.log(res.data);
          console.log('entrou');}
        );
      axios
        .get("http://127.0.0.1:8000/api/palavras/rand/", { headers: { 'Content-Type':'application/json', 'Accept':'application/json', 'Authorization': acesso } })
        .then((res) => {setVocabsDue(res.data);
          console.log(res.data);
          console.log('entrou2');}
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
        <Appbar/>
        <Due palavra1={vocabs.palavra} palavra2={vocabsDue.palavra}  reestart={reiniciarJogo}></Due>
    </React.Fragment>
    );
}