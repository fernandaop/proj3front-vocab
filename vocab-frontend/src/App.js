import Vocab from "./components/Vocab";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Words from "./components/Words";

function App() {
  const [vocabs, setVocabs] = useState([]); // Remova o array de notes que existia na versão anterior

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/notes/")
      .then((res) => setVocabs(res.data));
  }, []);
  
  var palavra = vocabs;
  const comp = 0;
  console.log(palavra);
  //comparar palavra com o que o usuario digitou letra por letra
  //se for igual, mostrar a palavra
  //se for diferente, mostrar a palavra com a letra errada em vermelho
  //se for igual, mostrar a palavra com a letra correta em verde
  function compareWords(palavrausuario){
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === palavrausuario[i]) {
        comp = 1;
      } else {
        comp= -1;}
      return comp;
  }
  return (
    <div className="App">
      <div className="appbar">
        <button className="appbar-button">Uno</button>
      </div>
      <h1>
        <span className="titlev">VOCAB</span>
      </h1>
      <Vocab>{vocabs.title}</Vocab>
      <Words></Words>
    </div>
  );
  }
}

export default App;
