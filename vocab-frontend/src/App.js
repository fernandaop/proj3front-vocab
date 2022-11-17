import Vocab from "./components/Vocab";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Words from "./components/Words";

function App() {
  const [vocabs, setVocabs] = useState([]); // Remova o array de notes que existia na versão anterior

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/palavras/rand/")
      .then((res) => setVocabs(res.data));
  }, []);
  
  //comparar palavra com o que o usuario digitou letra por letra
  //se for igual, mostrar a palavra
  //se for diferente, mostrar a palavra com a letra errada em vermelho
  //se for igual, mostrar a palavra com a letra correta em verde

  return (
    <div className="App">
      <div className="appbar">
        <button className="appbar-button">Uno</button>
      </div>
      <h1>
        <span className="titlev">VOCAB</span>
      </h1>
      {/* <Vocab>{vocabs.palavra}</Vocab> */}
      <Words palavra={vocabs.palavra}></Words>
    </div>
  );
}

export default App;
