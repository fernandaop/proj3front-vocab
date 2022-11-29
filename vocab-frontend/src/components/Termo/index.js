import React from "react";
import Words from "../Words";
import Appbar from "../Appbar";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Termo(props) {
    const [vocabs, setVocabs] = useState([]); // Remova o array de notes que existia na versão anterior

    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/palavras/rand/")
        .then((res) => setVocabs(res.data));
    }, []);
    
    //comparar palavra com o que o usuario digitou letra por letra
    //se a letra for igual, mostrar a letra correta em verde
    //se a letra nao for igual mas estiver em outro lugar da palavra, mostrar a letra em amarelo
   
    function reiniciarJogo() {
      axios
        .get("http://127.0.0.1:8000/api/palavras/rand/")
        .then((res) => setVocabs(res.data));
    };  
  
    return (
    <React.Fragment>
        <Appbar/>
        <Words palavra={vocabs.palavra} reestart={reiniciarJogo}></Words>
    </React.Fragment>
    );
}